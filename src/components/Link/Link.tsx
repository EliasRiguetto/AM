import { MoveRight } from 'lucide-react'
import styles from './Link.module.css'
import React from 'react'

type LinkProps = {
    className?: string;
}

export const Link = ({ className }: LinkProps) => {
    return (
        <div className={`${styles.link} ${className ?? ''}`}>
            <a href="">
                Saiba Mais <MoveRight />
            </a>
        </div>
    )
}
