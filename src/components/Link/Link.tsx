import { MoveRight } from 'lucide-react'
import styles from './Link.module.css'
import React from 'react'

export const Link = () => {
    return (
        <div className={styles.link}>
            <a href="">Saiba Mais <MoveRight /> </a>
        </div>

    )
}
