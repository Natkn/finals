// src/components/Header.tsx
import React from "react";
import Image from "next/image";
import styles from "@/app/main/page.module.css";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" width={50} height={50} />
      </div>
      <nav className={styles.nav}>
        <button className={styles.loginButton}>Войти</button>
      </nav>
    </header>
  );
};

export default Header;
