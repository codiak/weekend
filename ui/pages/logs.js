import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { useFetchUser } from "libs/user";
import { gql } from 'apollo-boost';
import { client } from "libs/apollo";
import { Table } from 'antd';

const Logs = ({task_log, tasks}) => {
  const { user, loading } = useFetchUser();
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
      <Header user={user} loading={loading} />
      {!loading && !user && (
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

export async function getStaticProps(context) {
  let tasks = [];
  let task_log = [];
  let { data } = await client.query({
    query: gql`
      {
        task_log(where: { owner_id: { _eq: "a5eca2c4-8534-4100-8b8a-49f90a1b6c8f" } }) {
          task_id,
          home_id,
          completed_on
        }
        tasks(where: { owner_id: { _eq: "a5eca2c4-8534-4100-8b8a-49f90a1b6c8f" } }) {
          name,
          id
        }
      }
    `,
  });
  task_log = data.task_log;
  tasks = data.tasks;

  return {
    props: { task_log, tasks },
  };
}

export default Logs
