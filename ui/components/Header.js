export default function Header({ user, loading }) {
  return (
    <>
      <h1 className="title">
        <img id="logo" src="/logo.png" />
        Weekend
      </h1>
      {!loading &&
        (user ? (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        ) : (
          <li>
            <a href="/api/login">Login</a>
          </li>
        ))}
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
    </>
  );
}
