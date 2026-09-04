import React from 'react'
import styles from "./Heading.module.css";

type HeadingProps = {
    title: string;
    className?: string;
}

export const Heading = ({ title, className }: HeadingProps) => {
    return (
        <h1 className={`${styles.heading} ${className ?? ''}`}>
            {title}
        </h1>
    )
}