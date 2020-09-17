import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
import gql from 'graphql-tag';
import { client } from "libs/apollo";
import { Table } from 'antd';

const Logs = () => {
  // TODO: fetch tasks
  const task_log = [];
  const tasks = [];

  const { user, isLoading } = useAuth0();
  const logColumns = [{
    title: 'Task',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Last Completed',
    dataIndex: 'completed_on',
    key: 'completed_on'
  }];
  const recurringColumns = [{
    title: 'Task',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Last Completed',
    dataIndex: 'completed_on',
    key: 'completed_on'
  }];
  const completed = task_log.map((log_item) => {
    let task = { ...log_item, ...tasks.find(t => t.id === log_item.task_id)};
    task.completed_on = new Date(task.completed_on).toDateString()
    return task;
  });

  console.log(tasks, task_log);

  return (
    <main className="container">
      <Head>
        <title>Wkend | Homes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={isLoading} />
      {!isLoading && !user && (
        <>
          <p>Please login</p>
        </>
      )}
      {user && (
        <>
          <Sidebar />
          <div className="contents">
            <h2>Maintenance Log</h2>
            <Table dataSource={completed} columns={logColumns} />
            <h2>Recurring Tasks</h2>
            <Table dataSource={tasks} columns={logColumns} />
          </div>
        </>
      )}
      <Footer />
      <style jsx global>{`
        .ant-table-wrapper {
          margin-top: 2em;
        }
      `}
      </style>
    </main>
  );
}

export default Logs
