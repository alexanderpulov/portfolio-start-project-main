import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImgWrapper>
        <Img src={props.src} alt="" />
        <Button>view project</Button>
      </ImgWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">demo</Link>
        <Link href="#">code</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    ${Button} {
      opacity: 1;
    }

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;
