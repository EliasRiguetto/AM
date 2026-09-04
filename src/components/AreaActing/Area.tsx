import React from 'react'
import styles from "./Area.module.css"
import { Container } from '../Container'
import { Heading } from '../Heading'

export const Area = () => {
  return (
    <section>
        <Container>
            <div className={styles.area}>
            <Heading title="Área de Atuação"/> 
            </div>
        </Container>
    </section>
  )
}
