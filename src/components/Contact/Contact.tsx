import React from "react";
import { Section } from "../Section";
import { Reveal } from "../Reveal";
import { Form } from "../Form";
import { Social } from "../SocialMedia";
import styles from "./Contact.module.css";

export const ContactContent = () => {
  return (
    <Reveal direction="down">
    <Section>
      <div className={styles.contato}>
        <Form />
        <Social variant="dark" />
      </div>
    </Section>
    </Reveal>
  );
};
