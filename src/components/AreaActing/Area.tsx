import React from 'react'
import styles from "./Area.module.css"
import { Container } from '../Container'
import { Heading } from '../Heading'
import { Card } from '../CardArea'
import {Link} from "../Link"
import { FileIcon, FileUserIcon, HouseIcon, UsersIcon } from 'lucide-react'


export const Area = () => {
    return (
        <section>
            <Container>
                <div className={styles.area}>
                    <Heading title="Áreas de Atuação" />
                    <p>
                        Soluções jurídicas para diferentes necessidades.
                    </p>
                    <ul>
                        <Card icon={<FileUserIcon/>} title={<>Direito <br/> Cível</>} text="Responsabilidade  cível, cobranças, indenizações e
                            conflitos ente particulares" />
                        <Card icon={<FileIcon />} title={<>Direito <br/> Contratual</>} text="Elaboração e revisão 
                            de contratos, compra  e venda, locações, riscos contratuais e notificações
                            extrajudiciais"  />
                        <Card icon={<HouseIcon/>} title={<>Direito <br/> Imobiliário</>} text="Regularizações, contratos
                                de compra e venda, locações e assessoria em questões imobiliárias" />
                        <Card icon={<UsersIcon/>} title={<>Direito de Família <br/> e Sucessões</>} text="Divórcios, guarda, 
                            regulamentação de convivência alimentos, revisão e execução de alimentos, invertário e partilha"/>
                    </ul>
        <Link/>
                </div>
            </Container>
        </section>
    )
}
