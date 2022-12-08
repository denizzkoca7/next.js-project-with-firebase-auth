import React from "react";
import styles from "../styles/components/SideBarMenu.module.scss";
import Logo from "../public/images/logo.png";
import Image from "next/image";

import { BiUser, BiHome, BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";
import { getAuth } from "firebase/auth";

const SideBarMenu = () => {
  const { user, logout } = useAuth();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);

  const menuItems = [
    {
      icon: <BiHome fontSize={25} />,
      text: "Home",
    },
    {
      icon: <BiUser fontSize={25} />,
      text: "Profile",
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
        <div
          className={styles.menuItem}
          onClick={() => {
            if (item.text === "Logout") {
              logout();
            }
          }}
        >
          <div className={styles.menuItemIcon}>{item.icon}</div>
          <div className={styles.menuItemText}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBarMenu;
