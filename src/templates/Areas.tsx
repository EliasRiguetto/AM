import React from "react";
import { BgImage } from "../components/BgImage/BgImage";
import { Container } from "../components/Container";
import { Area } from "../components/AreaActing";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Flex } from "../components/FlexCenter";
import { Card } from "../components/CardArea";
import { FileIcon, FileUserIcon, HouseIcon, UsersIcon } from "lucide-react";

export const Areas = () => {
  return (
    <>
      <BgImage>
        <Container>
          <Flex align="center" justify="center">
            <Heading title="Áreas de Atuação" variant="dark" />
          </Flex>
        </Container>
      </BgImage>
      <Section>
        <Container>
          <Flex>
            <Card
              icon={<FileUserIcon />}
              title={
                <>
                  Direito <br /> Cível
                </>
              }
              text="Responsabilidade  cível, cobranças, indenizações e
                            conflitos ente particulares"
            />
            <Card
              icon={<FileIcon />}
              title={
                <>
                  Direito <br /> Contratual
                </>
              }
              text="Elaboração e revisão 
                            de contratos, compra  e venda, locações, riscos contratuais e notificações
                            extrajudiciais"
            />
            <Card
              icon={<HouseIcon />}
              title={
                <>
                  Direito <br /> Imobiliário
                </>
              }
              text="Regularizações, contratos
                                de compra e venda, locações e assessoria em questões imobiliárias"
            />
            <Card
              icon={<UsersIcon />}
              title={
                <>
                  Direito de Família <br /> e Sucessões
                </>
              }
              text="Divórcios, guarda, 
                            regulamentação de convivência alimentos, revisão e execução de alimentos, invertário e partilha"
            />

            <Card
              icon={<UsersIcon />}
              title={
                <>
                  Direito do <br /> Consumidor
                </>
              }
              text="Bancos e Financeiras, Empréstimos e Consignados, Contratos bancários, Prestação defeituosa de serviços, Cobranças indevidas e Reparação de danos"
            />

            <Card
              icon={<UsersIcon />}
              title={
                <>
                  Regularização Patrimonial
                  <br /> e Sucessória
                </>
              }
              text="Inventários, Organização documental, Imóveis de familia, Divisão entre herdeiros, Compra da parte dos demais herdeiros, Regularização para posterior venda ou transferência"
            />

            <Card
              icon={<UsersIcon />}
              title={
                <>
                  Direito
                  <br /> Digital
                </>
              }
              text="Proteção de dados e  Compliance"
            />
          </Flex>
        </Container>
      </Section>
    </>
  );
};
