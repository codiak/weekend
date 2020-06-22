import { Button } from "antd";

export default function Sidebar({home}) {
  return (
    <>
      <div className="sidebar">
        <div className="mb-1">
          <Button type="primary">Assistant</Button>
        </div>
        <div className="mb-1">
          <Button>{home.name || "My House"}</Button>
        </div>
        <div className="mb-1">
          <Button>Maintenance</Button>
        </div>
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

        .sidebar button {
          width: 100%;
          border-radius: 0px;
          text-align: left;
          border: none;
          background: #fff;
          padding: 1px;
          height: 3em;
          margin-top: 1em;
        }

        .sidebar .ant-btn-primary {
          color: #1890ff;
          border-bottom: 2px solid #1890ff;
        }
      `}</style>
    </>
  )
}