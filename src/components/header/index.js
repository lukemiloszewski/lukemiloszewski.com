import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

function Header({ title, subtitle }) {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
