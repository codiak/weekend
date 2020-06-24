import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { useFetchUser } from "libs/user";

const Logs = () => {
  const { user, loading } = useFetchUser();

  return (
    <main className="container">
      <Head>
        <title>Wkend | Homes</title>
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
            Logs!
          </div>
        </>
      )}
      <Footer />
    </main>
  );
}

export default Logs
