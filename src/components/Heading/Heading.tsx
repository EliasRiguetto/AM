import React from 'react'
import styles from "./Heading.module.css";

type HeadingProps = {
    title: String;
}

export const Heading = ({title}: HeadingProps) => {
  return (
    <h1 className={styles.heading}>{title}</h1>
  )
}
