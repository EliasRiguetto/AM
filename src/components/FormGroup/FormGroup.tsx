import React from 'react'
import styles from './FormGroup.module.css'

type FormGroupProps = {
  children: React.ReactNode
}

export const FormGroup = ({children}: FormGroupProps) => {
  return (
    <div className={styles.formGroup}>
      {children}
    </div>
  )
}
