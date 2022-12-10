import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import useGetUsers from "../../services/useGetUsers";
import styles from "../../styles/pages/Details.module.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import useGetPosts from "../../services/useGetPosts";
import { useGetPostsComments } from "../../services/useGetComments";
import Loader from "../../components/Loader";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, isLoading, isError } = useGetUsers(Number(id));
  const { comments } = useGetPostsComments(Number(id));
  const { posts } = useGetPosts();

  const post = posts?.find((post) => post.id === Number(id));

  if (isError) return <div>Something went wrong...</div>;

  if (!user || isLoading || !comments) return <Loader />;

  return (
    <Layout title="">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.user__avatar}>{user.name[0]}</div>
          <div className={styles.user__info}>
            <div className={styles.user__name}>{user.name}</div>
            <div className={styles.user__contact}>
              <div className={styles.contact__item}>
                <MdOutlineMailOutline />

                {user.email}
              </div>
              <div className={styles.contact__item}>
                <AiFillPhone />
                {user.phone}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.body__title}>{post?.title}</div>
          <div className={styles.body__content}>{post?.body}</div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footer__title}>
            <h3>Post Comments</h3>
          </div>
          <div className={styles.footer__content}>
            {comments.map((comment) => (
              <div className={styles.comments}>
                <div className={styles.header}>
                  <div className={styles.user__avatar}>
                    {comment.name[0].toLocaleUpperCase()}
                  </div>
                  <div className={styles.user__info}>
                    <div className={styles.user__name}>{comment.name}</div>
                    <div className={styles.user__email}>
                      <MdOutlineMailOutline />
                      {comment.email}
                    </div>
                  </div>
                </div>
                <div className={styles.comment__body}>{comment.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
