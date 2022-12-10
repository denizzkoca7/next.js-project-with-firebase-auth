import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3f51b5"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
