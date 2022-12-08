import styles from "../../styles/components/posts/Posts.module.scss";
import PostItem from "../Item";
import useGetPosts from "../../services/useGetPosts";
import { useState } from "react";
import Pagination from "../Pagination";
import DahboardItem from "../DashboardItemLayout";

type PostsProps = {
  dashboard?: boolean;
};

const Index: React.FC<PostsProps> = ({ dashboard = false }) => {
  const [page, setPage] = useState(1);

  const { posts, isError, isLoading } = useGetPosts();
  if (isError) return <div>Something went wrong...</div>;
  if (!posts || isLoading) return <div>Loading...</div>;

  const totalPages = Math.ceil(posts.length / 10);

  const handlePage = (page: number) => {
    setPage(page);
  };

  const showPosts =
    posts && posts.slice((page - 1) * 10, page * (dashboard ? 5 : 10));

  return <DahboardItem title="Posts" data={posts} />;
};

export default Index;
