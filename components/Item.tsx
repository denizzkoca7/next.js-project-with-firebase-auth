import Link from "next/link";
import styles from "../styles/components/DashboardItem.module.scss";

type PostItemProps = {
  data: any;
};

const Item: React.FC<PostItemProps> = ({ data }) => {
  return (
    <Link className={styles.item} href={`/posts/${data.id}`}>
      <div className={styles.item__title}>
        {data.id} - {data.title || data.name}
      </div>
      <div className={styles.item__body}>
        <p>{data.body}</p>
      </div>
    </Link>
  );
};

export default Item;
