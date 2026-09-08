import React from "react";
import styles from "./Form.module.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input id="name" label="Nome" type="text" />

      <Input id="email" label="E-mail" type="email" />

      <FormGroup>
        <label htmlFor="" className={styles.labelForm}>Mensagem</label>
        <textarea name="" id="" className={styles.textArea} ></textarea>
      </FormGroup>

      <FormGroup>
        <Button size="large">Enviar Mensagem</Button>
      </FormGroup>
    </form>
  );
};
