import Link from "next/link";
import styles from "../styles/pages/Posts.module.scss";
import Pagination from "./Pagination";

type PageContentProps = {
  data: any;
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
  comments?: boolean;
};

const PageContent: React.FC<PageContentProps> = ({
  data,
  totalCount,
  page,
  setPage,
  comments,
}) => {
  return (
    <>
      <div className={styles.container}>
        {data.map((item: any) => (
          <div className={styles.item}>
            <Link href={`/posts/${comments ? item.postId : item.id}`}>
              <div key={item.id}>
                <h3 className={styles.item__title}>
                  {item.title || item.name}
                </h3>
                <p className={styles.item__body}>{item.body}</p>
              </div>
            </Link>
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
    </>
  );
};

export default PageContent;
