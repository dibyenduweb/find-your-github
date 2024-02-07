import React from "react";
import styles from "./Header.module.css";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3>Find your GitHub Account</h3>
      <Toggle />
    </header>
  );
};

export default Header;
