import React from "react";
import Layout from "../components/Layout";
import Posts from "../components/Dashboard/Posts";
import Comments from "../components/Dashboard/Comments";

const dashboard = () => {
  return (
    <Layout title="">
      <Posts dashboard={true} />
      <Comments />
    </Layout>
  );
};

export default dashboard;
