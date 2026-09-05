import React from 'react'
import styles from './BgImage.module.css';

type BgImageProps = {
    children: React.ReactNode
}

export const BgImage = ({children}:BgImageProps) => {
  return (
    <div className={styles.bgImage}>
        {children}
    </div>
  )
}
