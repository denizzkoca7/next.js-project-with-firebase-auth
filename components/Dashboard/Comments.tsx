import DashboardItem from "../DashboardItemLayout";
import useGetComments from "../../services/useGetComments";
import Loader from "../Loader";

const index = () => {
  const { comments, isError, isLoading } = useGetComments();
  if (isError) return <div>Something went wrong...</div>;
  if (!comments || isLoading) return <Loader />;

  return (
    <div>
      <DashboardItem title="Comments" data={comments} />
    </div>
  );
};

export default index;
