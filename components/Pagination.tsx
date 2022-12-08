import styles from "../styles/components/Pagination.module.scss";
type PaginationProps = {
  page: number;
  totalPages: number;
  handlePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  handlePage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className="btn btn-primary"
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>
        {page} of {totalPages}
      </span>
      <button
        className="btn btn-primary"
        onClick={() => handlePage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
