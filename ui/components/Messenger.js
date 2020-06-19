import React, { useState } from "react";
import { Input } from "antd";
import classNames from "classnames";
import Record from "@components/Record";

const { Search } = Input;

export default function Messenger({home}) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);

  var recordDisplay = "";

  // Jerry-rig kicking things off
  if (process.browser && !home.name && messages.length === 0) {
    sendMessage("Get started!");
  }

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
      alert("Error sending message!");
    }
  }

  function pushNewMessages(messageObj) {
    let updatedMessages = messages.slice();
    updatedMessages = updatedMessages.concat(messageObj);
    setMessages(updatedMessages);
    setDraft("");
    // Text-to-speech
    if (process.browser && messageObj[1]) {
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
              {recordDisplay}
              <Search
                placeholder="What's up?"
                value={draft}
                enterButton="Send"
                size="large"
                onChange={(e) => setDraft(e.value)}
                onSearch={(value) => sendMessage(value)}
              />
            </div>
          </div>
          <style jsx>{`
            .contents {
              position: relative;
              padding: 2rem;
              flex-grow: 1;
              padding-bottom: 100px;
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
              max-width: 75%;
              background: #e8f9f2;
              padding: 10px;
              border-radius: 8px;
              margin-bottom: 10px;
              margin-right: auto;
              color: #444444;
            }

            .message.sent {
              margin-right: 0;
              margin-left: auto;
              background: #eaeaea;
            }
          `}</style>
    </>
  )
}