import React from "react";
import styles from "../styles/components/Layout.module.scss";
import SideBarMenu from "./SideBarMenu";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.containerLayout}>
      <div className={styles.sidebar}>
        <SideBarMenu />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
