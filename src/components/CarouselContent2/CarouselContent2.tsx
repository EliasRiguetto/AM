import React from "react";
import { Container } from "../Container";
import image from "../../images/content2.png";
import styles from "./CarouselContent2.module.css";

export const CarouselContent2 = () => {
  return (
    <main className={styles.carouselContent}>
        <img src={image} alt="" />
    </main>
  );
};
