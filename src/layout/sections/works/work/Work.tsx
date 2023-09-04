import React from "react";
import { S } from "../Works_Styles";
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImgWrapper>
        <S.Img src={props.src} alt="" />
        <Button>view project</Button>
      </S.ImgWrapper>

      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link href="#">demo</Link>
        <Link href="#">code</Link>
      </S.Description>
    </S.Work>
  );
};
