import { Button, PageHeader, Tag } from "antd";
import { useRouter } from "next/router";

export default function Header({ user, loading }) {
  const router = useRouter();
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
                onClick={() => {
                  router.push("/api/logout");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              key="1"
              onClick={() => {
                router.push("/api/login");
              }}
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
