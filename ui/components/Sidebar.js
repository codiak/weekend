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
      <style jsx>{`
        .sidebar {
            min-height: 75vh;
            width: 300px;
            background: #f1f1f1;
            border-radius: 10px;
            padding: 2rem;
            align-items: top;
            margin-bottom: 2rem;
          }
      `}</style>
    </>
  )
}