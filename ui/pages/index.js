import React, { useState } from "react";
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import classNames from 'classnames'
import { Input } from 'antd';

const { Search } = Input;


export default function Home() {
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([]);

  async function sendMessage(text) {
    const res = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify({message: text})
    });
    if (res.ok) {
      let data = await res.json();
      pushNewMessages([
        {'from': 'user', 'text': text, 'date': Date.now()},
        {'from': 'weekend', 'text': data.reply, 'date': Date.now()}
      ]);
    } else {
      alert('Error sending message!');
    }
  }

  function pushNewMessages(messageObj) {
    let updatedMessages = messages.slice()
    updatedMessages = updatedMessages.concat(messageObj);
    setMessages(updatedMessages);
  }

  return (
    <main className="container">
      <Head>
        <title>Weekend Home Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sidebar">
        Thing!
      </div>
      <div className="contents">
        {messages.map(message => {
          return (<div className={classNames('message', message.from === 'user' ? 'sent':'received')} key={message.date}>
            { message.text }
          </div>)
        })}
        <div className="inputWrap">
          <Search placeholder="What's up?"
            enterButton="Send"
            size="large"
            onSearch={value => sendMessage(value)}/>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 1000px;
          display: flex;
          flex-wrap: wrap;
        }

        .sidebar {
          min-height: 75vh;
          width: 300px;
          background: #f1f1f1;
          border-radius: 10px;
          padding: 2rem;
          align-items: top;
          margin-bottom: 2rem;
        }

        .contents {
          position: relative;
          padding: 2rem;
          flex-grow: 1;
          padding-bottom: 100px;
        }

        .inputWrap {
          border-top: 1px solid #DEDEDE;
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

        .input--btn {
          width: calc(100% - 100px);
        }

        .btn--input {
          height: 2em;
          width: 100px;
        }

        p {
          margin-top: 0;
        }

        .message {
          max-width: 75%;
          background: #E8F9F2;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 10px;
          margin-right: auto;
          color: #444444;
        }

        .message.sent {
          margin-right: 0;
          margin-left: auto;
          background: #EAEAEA;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  )
}
