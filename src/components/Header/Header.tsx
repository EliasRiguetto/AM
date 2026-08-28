import React from "react";
import styles from "./Header.module.css";
import { Container } from "./../Container";
import { Logo } from "./../Logo";
import { Nav } from "../Nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
};
