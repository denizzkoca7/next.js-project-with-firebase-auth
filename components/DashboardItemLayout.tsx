import Link from "next/link";
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
      <div className="d-flex justify-content-between align-items-center">
        <h1>{title}</h1>
        <Link href={`/${title.toLowerCase()}`}>
          <button className="btn btn-primary m-2">Tümünü Göster</button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {data &&
          showData?.map((data: any) => <Item key={data.id} data={data} />)}
      </div>
    </div>
  );
};

export default DahboardItem;
