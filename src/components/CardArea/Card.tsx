import React, { type ReactElement } from 'react'
import styles from "./Card.module.css"


type CardProps = {
    title: React.ReactNode
    text: String
    icon: React.ReactNode
}
export const Card = ({ title, text, icon }: CardProps) => {
    return (
        <li className={styles.card}>
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
        </li>
    )
}
