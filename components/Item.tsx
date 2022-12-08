import styles from "../styles/components/DashboardItem.module.scss";

type PostItemProps = {
  data: any;
};

const Item: React.FC<PostItemProps> = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTitle}>
        <h3>
          <a href="#">
            {data.id} - {data.title}
          </a>
        </h3>
      </div>
      <div className={styles.itemBody}>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Item;
