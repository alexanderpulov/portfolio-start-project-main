import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { Link } from "../../../components/Link";

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 30px;
  }
`;

const Work = styled.div`
  width: 330px;
  flex-grow: 1;

  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
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

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    ${Button}, &::before {
      opacity: 1;
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

export const S = {
  Works,
  Work,
  ImgWrapper,
  Img,
  Description,
  Title,
  Text,
};
