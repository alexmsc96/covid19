import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/charts">
          <li>Charts</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
      </ul>
    </nav>
  );
}
