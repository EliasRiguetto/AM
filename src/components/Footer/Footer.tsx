import React from "react";
import styles from "./Footer.module.css";
import { Container } from "./../Container";
import { Logo } from "./../Logo";
import { Nav } from "./../Nav";
import { Redes } from "./../Redes";
import { Copyright } from "../Copyright/Copyright";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerContent}>
            <Logo variant="footer" />
            <Nav variant="footer" />
            <Redes />
          </div>
        </Container>
      </footer>
      <Copyright />
    </>
  );
};
