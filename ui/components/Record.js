import React, { useState } from "react";
import { notification } from 'antd';

var gumStream; //stream from getUserMedia()
var recorder; 						//WebAudioRecorder object
var input; 							//MediaStreamAudioSourceNode  we'll be recording
var encodingType; 					//holds selected encoding for resulting audio (file)
var encodeAfterRecord = true;       // when to encode
// shim for AudioContext when it's not avb.
if (process.browser) {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioContext; //new audio context to help us record
  //webkitURL is deprecated but nevertheless
  URL = window.URL || window.webkitURL;
}

export default function Record({ pushNewMessages }) {
  const [recordDisabled, setRecordDisabled] = useState(false);

  const warningNotification = () => {
    notification['warning']({
      message: 'Unable To Hear You',
      description:
        'Please make sure you have allowed microphone access. When speaking to Wkend, click/tap and hold while talking, then release to send your message.',
    });
  };

  function startRecording() {
    console.log("startRecording() called");
    var constraints = { audio: true, video: false }
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      console.log("getUserMedia() success, stream created, initializing WebAudioRecorder...");
      audioContext = new AudioContext();
      //assign to gumStream for later use
      gumStream = stream;
      /* use the stream */
      input = audioContext.createMediaStreamSource(stream);
      //stop the input from playing back through the speakers
      //input.connect(audioContext.destination)
      // set the encoding
      encodingType = 'ogg';

      recorder = new WebAudioRecorder(input, {
        workerDir: "js/", // must end with slash
        encoding: encodingType,
        numChannels: 1, //2 is the default, mp3 encoding supports only 2
        onEncoderLoading: function (recorder, encoding) {
          // show "loading encoder..." display
          console.log("Loading " + encoding + " encoder...");
        },
        onEncoderLoaded: function (recorder, encoding) {
          // hide "loading encoder..." display
          console.log(encoding + " encoder loaded");
        }
      });

      recorder.onComplete = function (recorder, blob) {
        console.log("Encoding complete");
        // createDownloadLink(blob, recorder.encoding);
        sendRecording(blob);
      }

      recorder.setOptions({
        timeLimit: 20,
        encodeAfterRecord: encodeAfterRecord,
        ogg: {quality: 0.5},
        // mp3: {bitRate: 160}
      });

      //start the recording process
      recorder.startRecording();

      console.log("Recording started");

    }).catch(function (err) {
      console.log("Error on getUserMedia", err);
      //enable the record button if getUserMedia() fails
      setRecordDisabled(false);
    });
    //disable the record button
    setRecordDisabled(true);
  }

  function stopRecording() {
    console.log("stopRecording() called");
    //stop microphone access
    gumStream.getAudioTracks()[0].stop();
    setRecordDisabled(false);
    recorder.finishRecording();
    console.log('Recording stopped');
  }

  async function sendRecording(audioBlob) {
    let form = new FormData();
    form.append('upload', audioBlob, 'speech.ogg');
    const res = await fetch('/proxy/speech', {
      method: 'POST',
      body: form
    });
    if (res.ok) {
      let data = await res.json();
      pushNewMessages([
        {'from': 'user', 'text': data.text, 'date': Date.now()},
        {'from': 'weekend', 'text': data.reply, 'date': Date.now()}
      ]);
    } else {
      warningNotification();
    }
  }

  return (
    <>
      <div id="controls" className="record-toggle">
        <button onMouseDown={(e) => startRecording(e)}
          onTouchStart={(e) => startRecording(e)}
          onMouseUp={(e) => stopRecording(e)}
          onTouchEnd={(e) => stopRecording(e)}
          title="Click and hold to talk"
          className={recordDisabled ? 'recording' : ''}>
          <span role="img" aria-label="audio" class="anticon anticon-audio"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="audio" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path></svg></span>
        </button>
      </div>
      <style jsx>{`
          .record-toggle {
            display: inline-block;
          }
          .record-toggle button {
            border: 0px;
            background: #fff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-left: 10px;
            font-size: 21px;
            cursor: pointer;
            padding-top: 3px;
            color: #1890ff;
          }
          .record-toggle button:hover,
          .record-toggle button:focus {
            background: #e7856f;
            color: #fff;
          }
          .record-toggle button.recording {
            background: #e7856f;
            color: #fff;
          }
          .record-toggle button.recording:before {
            position: absolute;
            width: calc(100% - 50px);
            height: 100%;
            top: 0px;
            left: 0px;
            font-size: 15px;
            font-weight: bold;
            content: 'Wkend is listening...';
            color: #e7856f;
            background: rgba(255,255,255,0.6);
            display: block;
            padding: 28px;
          }
      `}</style>
      <style jsx global>{`
          .inputWrap .ant-input-group-wrapper {
            width: calc(100% - 50px) !important;
          }
      `}</style>
    </>
  )
}