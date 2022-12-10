import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title="Post Detail">
      <div>{id}</div>
    </Layout>
  );
};

export default PostDetail;
