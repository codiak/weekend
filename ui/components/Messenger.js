import React, { useState, useEffect } from "react";
import { Input, notification } from "antd";
import classNames from "classnames";
import Record from "@components/Record";
import { Tag } from 'antd';

const { CheckableTag } = Tag;
const { Search } = Input;

export default function Messenger({home}) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);
  const [talkBack, setTalkBack] = useState(false);

  var recordDisplay = "";

  useEffect(() => {
    if (process.browser && !home.name && messages.length === 0) {
      sendMessage("Get started!");
    } else if (home.name && messages.length === 0) {
      pushNewMessages([{from: "weekend", text: "Hello!", date: Date.now() }]);
    }
  }, [home]);

  function toastNotify() {
    notification['warning']({
      message: 'Unable to Send Message',
      description: 'Please try again, or make sure you have have a stable connection.',
    });
  };

  async function sendMessage(text) {
    const res = await fetch("/proxy/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    });
    if (res.ok) {
      let data = await res.json();
      pushNewMessages([
        { from: "user", text: text, date: Date.now() },
        { from: "weekend", text: data.reply, date: Date.now() },
      ]);
    } else {
      toastNotify();
    }
  }

  function pushNewMessages(messageObj) {
    let updatedMessages = messages.slice();
    updatedMessages = updatedMessages.concat(messageObj);
    setMessages(updatedMessages);
    setDraft("");
    // Text-to-speech
    if (talkBack && process.browser && messageObj[1]) {
      var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance(messageObj[1].text);
      synth.speak(utterThis);
    }
  }

  /* Only display record button client-side */
  if (process.browser) {
    recordDisplay = (
      <Record pushNewMessages={(msgObj) => pushNewMessages(msgObj)} />
    );
  }

  return (
    <>
      <div className="contents">
          <div className="starting-settings">
              <CheckableTag
                  checked={talkBack}
                  onChange={checked => setTalkBack(checked)}>
                  Speak&nbsp;
                  <span role="img" aria-label="sound"><svg viewBox="64 64 896 896" focusable="false" data-icon="sound" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path></svg></span>
              </CheckableTag>
          </div>
            {messages.map((message) => {
              return (
                <div
                  className={classNames(
                    "message",
                    message.from === "user" ? "sent" : "received"
                  )}
                  key={message.date}
                >
                  {message.text}
                </div>
              );
            })}
            <div className="inputWrap">
              <Search
                placeholder="What's up?"
                value={draft}
                enterButton="Send"
                size="large"
                onChange={(e) => setDraft(e.value)}
                onSearch={(value) => sendMessage(value)}
              />
              {recordDisplay}
            </div>
          </div>
          <style jsx>{`
            .contents {
              position: relative;
              padding: 2rem;
              display: flex;
              flex-grow: 1;
              padding-bottom: 100px;
              flex-flow: column wrap;
            }

            .inputWrap {
              border-top: 1px solid #dedede;
              background: #fff;
              padding: 20px 0;
              width: calc(100% - 4rem);
              position: absolute;
              bottom: 0;
            }

            input[type="text"] {
              height: 2em;
              line-height: px;
            }

            p {
              margin-top: 0;
            }

            .message {
              /* display: flex; */
              /* width: auto; */
              flex-basis: max-content;
              max-width: 75%;
              background: #87c6ac;
              padding: 10px;
              border-radius: 8px;
              margin-bottom: 10px;
              margin-right: auto;
              color: #fff;
            }

            .message.sent {
              margin-right: 0;
              margin-left: auto;
              background: #eaeaea;
              color: #111;
            }

            .starting-settings {
              margin-left: auto;
              margin-bottom: 1em;
              width: auto;
              text-align: right;
            }
          `}</style>
    </>
  )
}