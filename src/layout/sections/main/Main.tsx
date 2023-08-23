import React from "react";
import photo from "../../../assets/images/photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <Text>
          <span>Hi There</span>
          <span>I am Svetlana Dyablo</span>
          <h1>A Web Developer.</h1>
        </Text>

        <Photo src={photo} alt="/" />
      </FlexWrapper>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: antiquewhite;
`;

const Text = styled.div`
  h1 {
    color: red;
  }
`;
