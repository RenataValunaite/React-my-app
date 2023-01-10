import React from "react";
import styles from "./navBar.module.css";

const navBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.menuList}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
    </header>
  );
};

export default navBar;
