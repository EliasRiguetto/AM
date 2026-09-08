import React from 'react'
import styles from './Input.module.css';
import { FormGroup } from '../FormGroup';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <FormGroup >
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} {...props} />
    </FormGroup>
  )
}
