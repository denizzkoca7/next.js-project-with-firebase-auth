import { useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import PageContent from "../components/PageContent";
import useGetComments from "../services/useGetComments";

const comments = () => {
  const [page, setPage] = useState(1);
  const { comments, isError, isLoading, totalCount } = useGetComments(page);

  if (isError) return <div>Something went wrong...</div>;

  if (!comments || isLoading) return <Loader />;
  return (
    <Layout title="Comments">
      <PageContent
        data={comments}
        totalCount={totalCount || 0}
        page={page}
        setPage={setPage}
        comments={true}
      />
    </Layout>
  );
};

export default comments;
