import { Button } from "antd";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Sidebar({home}) {
  const router = useRouter();

  function isActive(path) {
    if (router.pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="sidebar">
        <Link href="/" passHref>
          <Button type={isActive("/") ? "primary" : ""}>Assistant</Button>
        </Link>
        <Link href="/homes" passHref>
          <Button type={isActive("/homes") ? "primary" : ""}>My Home</Button>
        </Link>
        <Link href="/logs" passHref>
          <Button type={isActive("/logs") ? "primary" : ""}>Maintenance Log</Button>
        </Link>
      </div>
      <style jsx global>{`
        .sidebar {
            min-height: 75vh;
            width: 200px;
            border-radius: 0px;
            padding: 2rem;
            align-items: top;
            margin-bottom: 2rem;
          }

        .sidebar .ant-btn {
          width: 100%;
          border-radius: 0px;
          text-align: left;
          border: none;
          background: #fff;
          padding: 1px;
          height: 3em;
          margin-top: 2em;
          font-weight: 500;
        }

        .sidebar .ant-btn-primary {
          color: #1890ff;
          border-bottom: 2px solid #1890ff;
        }
      `}</style>
    </>
  )
}