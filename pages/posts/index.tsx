import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import PageContent from "../../components/PageContent";
import useGetPosts from "../../services/useGetPosts";

const index = () => {
  const [page, setPage] = useState(1);
  const { posts, isError, isLoading, totalCount } = useGetPosts(page);

  if (isError) return <div>Something went wrong...</div>;

  if (!posts || isLoading) return <Loader />;

  return (
    <Layout title="Posts">
      <PageContent
        data={posts}
        totalCount={totalCount || 0}
        page={page}
        setPage={setPage}
      />
    </Layout>
  );
};

export default index;
