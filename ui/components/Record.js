import React, { useState } from "react";

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
    // form.append('name', 'speech.ogg');
    form.append('upload', audioBlob, 'speech.ogg');
    const res = await fetch('/api/speech', {
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
      alert('Error sending message!');
    }
  }

  function createDownloadLink(blob, encoding) {
    var url = URL.createObjectURL(blob);
    var au = document.createElement('audio');
    var li = document.createElement('li');
    var link = document.createElement('a');

    //add controls to the <audio> element
    au.controls = true;
    au.src = url;

    //link the a element to the blob
    link.href = url;
    link.download = new Date().toISOString() + '.' + encoding;
    link.innerHTML = link.download;

    //add the new audio and a elements to the li element
    li.appendChild(au);
    li.appendChild(link);

    //add the li element to the ordered list
    recordingsList.appendChild(li);
  }

  return (
    <div>
      <div id="controls">
        <button id="recordButton" disabled={recordDisabled} onClick={(e) => startRecording(e)}>Record</button>
        <button id="stopButton" disabled={!recordDisabled} onClick={(e) => stopRecording(e)}>Stop</button>
      </div>
      <div id="formats"></div>
      <pre>Log</pre>
      <pre id="log"></pre>

      <pre>Recordings</pre>
      <ol id="recordingsList"></ol>
    </div>
  )
}