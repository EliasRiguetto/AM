import React, { type ReactNode } from 'react'
import styles from "./CardContent.module.css"

type CardContentProps = {
    title: ReactNode
    icon: ReactNode
    items: ReactNode[] 
    itemIcon?: ReactNode 
}

export const CardContent = ({ title, icon, items, itemIcon }: CardContentProps) => {
    return (
        <li className={styles.card}>
            {icon}
            <h4>{title}</h4>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index}>
                        {itemIcon && itemIcon} {}
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </li>
    )
}