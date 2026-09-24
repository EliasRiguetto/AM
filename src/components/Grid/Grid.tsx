import React from 'react'
import styles from './Grid.module.css'

type gridProps = {
    children: React.ReactNode
}

export const Grid = ({children}:gridProps) => {
  return (
    <div className={styles.grid}>{children}</div>
  )
}
