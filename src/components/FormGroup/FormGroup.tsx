import React from 'react'
type FormGroupProps = {
  children: React.ReactNode
}

export const FormGroup = ({children}: FormGroupProps) => {
  return (
    <div>
      {children}
    </div>
  )
}
