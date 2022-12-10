import useGetPosts from "../../services/useGetPosts";
import DahboardItem from "../DashboardItemLayout";

type PostsProps = {
  dashboard?: boolean;
};

const Index: React.FC<PostsProps> = () => {
  const { posts, isError, isLoading } = useGetPosts();

  if (isError) return <div>Something went wrong...</div>;

  if (!posts || isLoading) return <div>Loading...</div>;

  return <DahboardItem title="Posts" data={posts} />;
};

export default Index;
