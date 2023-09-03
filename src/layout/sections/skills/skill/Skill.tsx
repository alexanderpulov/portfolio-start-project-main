import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center">
        <IconWrapper>
          <Icon iconId={props.iconId} viewBox="0 0 50 50" />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;

    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.1);
    transform-origin: top left;
  }
`;
