import React from 'react'
import styles from "./Heading.module.css";

type HeadingProps = {
    title: string;
    className?: string;
    variant?: 'light' | 'dark';
}

export const Heading = ({ title, className, variant = 'light' }: HeadingProps) => {
    return (
        <h1 className={`${styles.heading} ${styles[variant]} ${className ?? ''}`}>
            {title}
        </h1>
    )
}
