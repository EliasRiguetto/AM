import React from 'react'
import styles from './Flex.module.css'

type FlexProps = {
  children: React.ReactNode
  direction?: React.CSSProperties['flexDirection']
  align?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  gap?: React.CSSProperties['gap']
}

export const Flex = ({
  children,
  direction = 'row',
  align = 'center',
  justify = 'flex-start',
  gap = '2rem'
}: FlexProps) => {
  return (
    <div
      className={styles.flex}
      style={{
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap,
      }}
    >
      {children}
    </div>
  )
}
