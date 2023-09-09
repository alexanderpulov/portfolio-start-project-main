import React from "react";
import { S } from "./Skills_Styles";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  const skillData = [
    {
      iconId: "code",
      title: "html5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
      iconId: "css",
      title: "css3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
      iconId: "react",
      title: "React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
      iconId: "typescript",
      title: "typescript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
      iconId: "styled",
      title: "styled components",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
      iconId: "figma",
      title: "WEB DESIgN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
  ];

  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap">
          {skillData.map((s, index) => {
            return (
              <Skill
                key={index}
                iconId={s.iconId}
                title={s.title}
                description={s.description}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
