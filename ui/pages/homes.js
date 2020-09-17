import Head from "next/head";
import { Descriptions } from 'antd';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { useFetchUser } from "libs/user";
import gql from 'graphql-tag';
import { client } from "libs/apollo";

const HomeList = () => {
  const { user, loading } = useFetchUser();
  const homes = [];

  return (
    <main className="container">
      <Head>
        <title>Wkend | My Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={loading} />
      {!loading && !user && (
        <>
          <p>Please login</p>
        </>
      )}
      {user && (
        <>
          <Sidebar />
          <div className="contents">
            {homes.map((home) => {
              return (<Descriptions title={home.name} bordered>
                <Descriptions.Item label="Year Built">{home.built_date || 'Unknown'}</Descriptions.Item>
              </Descriptions>)
            })}
          </div>
        </>
      )}
      <Footer />
      <style jsx global>{`
        .ant-descriptions {
          margin-top: 2em;
        }
      `}
      </style>
    </main>
  );
}

export default HomeList
