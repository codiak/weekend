export default function Header() {
  return (<>
      <h1 className="title">
        <img id="logo" src="/logo.png"/>
        Weekend
      </h1>
      <style jsx>{`
        .title {
          width: 100%;
          align-items: center;
        }
        #logo {
          height: 1em;
          width: 1em;
          margin-right: 1rem;
        }
      `}</style>
  </>)
}
