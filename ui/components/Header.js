import { Button, PageHeader, Tag } from "antd";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header({ user, loading }) {
  const router = useRouter();
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div className="header">
      <PageHeader
        style={{ width: "100%" }}
        avatar={{ src: "/logo.png" }}
        title="Wkend"
        tags={<Tag color="green">Alpha</Tag>}
        extra={
          !loading && user ? (
            <>
              <b>{user.name}</b>
              <Button
                key="1"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              key="1"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )
        }
      ></PageHeader>
      <style jsx>{`
        .header {
          width: 100%;
          border-bottom: 1px solid #eaeaea;
          display: block;
          float: clear;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
