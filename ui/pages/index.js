import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import classNames from "classnames";
import { Button, Input } from "antd";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { useFetchUser } from "libs/user";

const client = new ApolloClient({
  uri: "http://ec2-52-86-111-85.compute-1.amazonaws.com:8080/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.X_HASURA_ADMIN_SECRET,
  },
});
const { Search } = Input;

function Home({ homes }) {
  const { user, loading } = useFetchUser();
  console.log(homes);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);
  const [home] = useState(homes[0] || {});

  // Jerry-rig kicking things off
  if (!home.name && messages.length === 0) {
    sendMessage("Get started!");
  }

  async function sendMessage(text) {
    const res = await fetch("/api/message", {
      method: "POST",
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
  }

  return (
    <main className="container">
      <Head>
        <title>Weekend Home Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={loading} />
      {loading && <p>Loading user information..</p>}

      {!loading && !user && (
        <>
          <p>Please login</p>
        </>
      )}

      {user && (
        <>
          <div className="sidebar">
            <div className="mb-1">
              <Button type="primary">Assistant</Button>
            </div>
            <div className="mb-1">
              <Button>{home.name || "My House"}</Button>
            </div>
            <div className="mb-1">
              <Button>Maintenance</Button>
            </div>
          </div>
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
        </>
      )}
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

        .mb-1 {
          margin-bottom: 1em;
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
  );
}

export async function getStaticProps(context) {
  let homes = [{ name: null }];
  let { data } = await client.query({
    query: gql`
      {
        test_homes(where: { owner_name: { _eq: "cody" } }) {
          id
          name
          owner_name
          built_date
        }
      }
    `,
  });
  homes = data.test_homes;

  return {
    props: { homes },
  };
}

export default Home;
