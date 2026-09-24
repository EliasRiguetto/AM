import React from "react";
import { BgImage } from "../components/BgImage/BgImage";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Flex } from "../components/FlexCenter";
import imageBg from "../images/areas_bg.jpg";
import { CardContent } from "../components/CardContent";
import { Grid } from "../components/Grid";
import {
  CheckIcon,
  FileIcon,
  FileUserIcon,
  HandHeartIcon,
  HouseIcon,
  ShoppingCartIcon,
  SquareMousePointerIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";

export const Areas = () => {
  return (
    <>
      <BgImage src={imageBg}>
        <Container>
          <Flex align="center" justify="center">
            <Reveal direction="down">
              <Heading title="Áreas de Atuação" variant="dark" />
            </Reveal>
          </Flex>
        </Container>
      </BgImage>
      <Section>
        <Container>
          <Reveal direction="down">
            <Grid>
              <CardContent
                icon={<FileUserIcon />}
                title={<>Direito Cível</>}
                itemIcon={<CheckIcon />}
                items={[
                  "Responsabilidade cível",
                  "Cobranças",
                  "Indenizações",
                  "Conflitos entre particulares",
                ]}
              ></CardContent>

              <CardContent
                icon={<FileIcon />}
                title={<>Direito Contratual</>}
                itemIcon={<CheckIcon />}
                items={[
                  "Elaboração e revisão de contratos",
                  "Compra e Venda",
                  "Locações",
                  "Riscos contratuais",
                  "Notificações extrajudiciais",
                ]}
              ></CardContent>

              <CardContent
                icon={<HouseIcon />}
                title={<>Direito Imobiliário</>}
                itemIcon={<CheckIcon />}
                items={[
                  "Regularizações",
                  "contratos de compra e venda",
                  "Locações",
                  "Assessoria em questões imobiliárias",
                ]}
              ></CardContent>

              <CardContent
                icon={<UsersIcon />}
                title={<>Direito de Família e Sucessões</>}
                itemIcon={<CheckIcon />}
                items={[
                  "Divórcios",
                  "Guarda",
                  "Regulamentação de convivência alimentos",
                  "Revisão e execução de alimentos",
                  "Invertário",
                  "Partilha",
                ]}
              ></CardContent>

              <CardContent
                icon={<ShoppingCartIcon />}
                title={<>Direito do Consumidor</>}
                itemIcon={<CheckIcon />}
                items={[
                  "Bancos e Financeiras",
                  "Empréstimos e Consignados",
                  "Contratos bancários",
                  "Prestação defeituosa de serviços",
                  "Cobranças indevidas",
                  "Reparação de danos",
                ]}
              ></CardContent>

              <CardContent
                icon={<HandHeartIcon />}
                title={<>Regularização Patrimonial</>}
                itemIcon={<CheckIcon />}
                items={[
                  "Inventários",
                  "Organização documental",
                  "Imóveis de familia",
                  "Divisão entre herdeiros",
                  "Compra da parte dos demais herdeiros",
                  "Regularização para posterior venda ou transferência",
                ]}
              ></CardContent>

              <CardContent
                icon={<SquareMousePointerIcon />}
                title="Direito Digital"
                itemIcon={<CheckIcon />}
                items={["Proteção de dados", "Compliance"]}
              />
            </Grid>
          </Reveal>
          <Section>
            <Reveal direction="up">
              <Flex align="center" justify="center">
                <Button to="/contato">Fale conosco</Button>
              </Flex>
            </Reveal>
          </Section>
        </Container>
      </Section>
    </>
  );
};
