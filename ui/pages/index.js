import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
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
        <p>
          Stuff goes here!
        </p>
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
          padding: 2rem;
          align-items: top;
          flex-grow: 1;
        }

        p {
          margin-top: 0;
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
