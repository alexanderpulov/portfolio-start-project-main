import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder="Name" />
        <Field placeholder="Name" />
        <Field placeholder="Name" as="textarea" />
        <Button type="submit">Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  background-color: beige;
  min-height: 50vh;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const Field = styled.input``;
