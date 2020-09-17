import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Messenger from "@components/Messenger";
import Sidebar from "@components/Sidebar";
import gql from 'graphql-tag';
import { useAuth0 } from "@auth0/auth0-react";
import { Spin } from 'antd';
import { client } from "libs/apollo";

function Home() {
  const { user, isLoading } = useAuth0();
  // TODO: fetch homes
  const homes = [];
  const [home] = useState(homes[0] || {});

  if (process.browser) {
    window.__user = user;
  }

  return (
    <main className="container">
      <Head>
        <title>Wkend Home Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={isLoading} />
      {isLoading && <p><Spin />&nbsp;Loading user information...</p>}

      {!isLoading && !user && (
        <>
          <p>Please login</p>
        </>
      )}

      {user && (
        <>
          <Sidebar home={home} />
          <Messenger home={home} />
        </>
      )}
      <Footer />
      <script src="/js/WebAudioRecorder.min.js"></script>
      <script src="/js/WebAudioRecorderWav.min.js"></script>
      <script src="/js/WebAudioRecorderMp3.min.js"></script>
      <script src="/js/WebAudioRecorderOgg.min.js"></script>
    </main>
  );
}

export default Home;
