import React from "react";
import { S } from "./Contacts_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <S.Contacts id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder="Name" />
          <S.Field placeholder="Name" />
          <S.Field placeholder="Name" as="textarea" />
          <Button type="submit">Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
