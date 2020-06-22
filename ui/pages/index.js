import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Messenger from "@components/Messenger";
import Sidebar from "@components/Sidebar";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { useFetchUser } from "libs/user";

const client = new ApolloClient({
  uri: "http://ec2-52-86-111-85.compute-1.amazonaws.com:8080/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.X_HASURA_ADMIN_SECRET,
  },
});

function Home({ homes }) {
  const { user, loading } = useFetchUser();
  const [home] = useState(homes[0] || {});

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
          <Sidebar home />
          <Messenger home />
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

        .mb-1 {
          margin-bottom: 1em;
        }

        .ml-1 {
          margin-left: 1em;
        }

        .input--btn {
          width: calc(100% - 100px);
        }

        .btn--input {
          height: 2em;
          width: 100px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
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

  // let { datatwo } = await client.mutate({
  //   mutation: gql`
  //     {
  //       insert_one_homes(objects: {name: "New Home", owner_name: "cody"}) {
  //         id
  //       }
  //     }
  //   `,
  // });
  // console.log(datatwo);

  homes = data.homes;

  return {
    props: { homes },
  };
}

export default Home;
