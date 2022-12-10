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
  if (totalPages === 1) return null;

  return (
    <div className={styles.container}>
      <button
        className="btn btn-primary me-2"
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`btn btn-primary mx-2 ${p === page ? "active" : ""}`}
            onClick={() => handlePage(p)}
          >
            {p}
          </button>
        ))}
      </span>
      <button
        className="btn btn-primary ms-2"
        onClick={() => handlePage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
