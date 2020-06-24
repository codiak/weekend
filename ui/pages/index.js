import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Messenger from "@components/Messenger";
import Sidebar from "@components/Sidebar";
import { gql } from "apollo-boost";
import { useFetchUser } from "libs/user";
import { Spin } from 'antd';
import { client } from "libs/apollo";

function Home({ homes }) {
  const { user, loading } = useFetchUser();
  const [home] = useState(homes[0] || {});

  if (process.browser) {
    window.__user = user;
  }

  return (
    <main className="container">
      <Head>
        <title>Weekend Home Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={loading} />
      {loading && <p><Spin />&nbsp;Loading user information...</p>}

      {!loading && !user && (
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

export async function getStaticProps(context) {
  let homes = [{ name: null }];
  let { data } = await client.query({
    query: gql`
      {
        homes(where: { owner_name: { _eq: "cody" } }) {
          id
          name
          owner_name
          built_date
        }
      }
    `,
  });

  // const ADD_ITEM = gql`
  //   mutation AddItemToWorkspace(
  //     $object: workspace_items_insert_input! = {
  //       doi: ""
  //       type: ""
  //       url: ""
  //       workspace_uuid: ""
  //       }
  //   ) {
  //     insert_workspace_items_one(object: $object) {
  //       doi
  //       type
  //       display_data
  //       url
  //       artstor_id
  //     }
  //   }
  // `;

  // objects: {name: "New Home", owner_name: "cody"}

  // let thing = await client.mutate({
  //   mutation: gql`
  //     mutation MyMutation ( $object: homes_insert_input! = {name: "", owner_name: ""} ) {
  //       insert_one_homes(object: $object) {
  //         id
  //       }
  //     }
  //   `,
  //   variables: {
  //     object: {name: "New Home", owner_name: "cody"}
  //   }
  // });
  // console.log(thing.data);

  homes = data.homes;

  return {
    props: { homes },
  };
}

export default Home;
