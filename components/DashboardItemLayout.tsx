import React from "react";
import styles from "../styles/components/DashboardItem.module.scss";

import Item from "./Item";

type DahboardItemProps = {
  data: any;
  title: string;
};

const DahboardItem: React.FC<DahboardItemProps> = ({ data, title }) => {
  const showData = data?.slice(0, 5);
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className="d-flex flex-wrap mt-1">
        {data &&
          showData?.map((data: any) => <Item key={data.id} data={data} />)}
      </div>

      <button className="btn btn-primary m-2">Tümünü Göster</button>
    </div>
  );
};

export default DahboardItem;
