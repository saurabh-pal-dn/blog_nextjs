import React from 'react';
import Layout from '../components/Layout';

export const Dashboard = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Dashboard',
      }}
    >
      <h1>
        <strong>Dashboard</strong>
      </h1>
    </Layout>
  );
};

export default Dashboard;
