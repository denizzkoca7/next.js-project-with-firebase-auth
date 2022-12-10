import React from "react";
import styles from "../styles/components/SideBarMenu.module.scss";
import Logo from "../public/images/logo.png";
import Image from "next/image";

import { BiHome, BiLogOut } from "react-icons/bi";
import { BsFilePost } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBarMenu = () => {
  const { user, logout } = useAuth();
  const [active, setActive] = React.useState(0);

  const router = useRouter();

  const { pathname } = router;

  const menuItems = [
    {
      icon: <BiHome fontSize={25} />,
      text: "Home",
      path: "/dashboard",
    },
    {
      icon: <BsFilePost fontSize={25} />,
      text: "Posts",
      path: "/posts",
    },
    {
      icon: <FaRegCommentDots fontSize={25} />,
      text: "Comments",
      path: "/comments",
    },
    {
      icon: <BiLogOut fontSize={25} />,
      text: "Logout",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.user}>
        <div className={styles.avatar}>
          {user.displayName?.[0].toUpperCase() || "A"}
        </div>
        <div className={styles.desc}>
          {user?.displayName ? user.displayName : "displayName"}
        </div>
        <div className={styles.email}>{user?.email ? user.email : "email"}</div>
      </div>
      {menuItems.map((item, index) => (
        <Link
          href={item.path ? item.path : "/"}
          className={`${styles.menuItem} ${
            (active === index ? styles.active : "",
            pathname === item.path ? styles.active : "")
          }`}
          onClick={() => {
            setActive(index);
            if (item.text === "Logout") {
              logout();
            }
          }}
        >
          <div className={styles.menuItemIcon}>{item.icon}</div>
          <div className={styles.menuItemText}>{item.text}</div>
        </Link>
      ))}
    </div>
  );
};

export default SideBarMenu;
