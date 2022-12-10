import React, { useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import useGetPosts from "../../services/useGetPosts";
import styles from "../../styles/pages/Posts.module.scss";

const index = () => {
  const [page, setPage] = useState(1);
  const { posts, isError, isLoading, totalCount } = useGetPosts(page);

  if (isError) return <div>Something went wrong...</div>;

  if (!posts || isLoading) return <div>Loading...</div>;

  return (
    <Layout title="Posts">
      <div className={styles.container}>
        {posts.map((post: any) => (
          <div className={styles.item}>
            <div key={post.id}>
              <h3 className={styles.item__title}>{post.title}</h3>
              <p className={styles.item__body}>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.postsPagination}>
        <Pagination
          page={page}
          totalPages={(totalCount || 1) / 10}
          handlePage={setPage}
        />
      </div>
    </Layout>
  );
};

export default index;
