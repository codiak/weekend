import Head from "next/head";
import { Descriptions } from 'antd';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { useFetchUser } from "libs/user";
import { gql } from 'apollo-boost';
import { client } from "libs/apollo";

const HomeList = ({homes}) => {
  const { user, loading } = useFetchUser();

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
          <div>
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
  homes = data.homes;

  return {
    props: { homes },
  };
}

export default HomeList
