import React from 'react'
import styles from './BgImage.module.css';

type BgImageProps = {
    src: string;
    children: React.ReactNode;
}

export const BgImage = ({ src, children }: BgImageProps) => {
  return (
    <div 
      className={styles.bgImage} 
      style={{ backgroundImage: `url(${src})` }}
    >
        {children}
    </div>
  )
}