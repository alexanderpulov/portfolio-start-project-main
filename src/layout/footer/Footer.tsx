import React from "react";
import { S } from "./Footer_Styles";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

import { Container } from "../../components/Container";

export const Footer = () => {
  const socialItemData = [
    {
      iconId: "instagram",
    },
    {
      iconId: "telegram",
    },
    {
      iconId: "vk",
    },
    {
      iconId: "linkedin",
    },
  ];

  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column" align="center">
          <S.Name>Svetlana</S.Name>
          <S.SocialList>
            {socialItemData.map((s, index) => {
              return (
                <S.SocialItem key={index}>
                  <S.SocialLink>
                    <Icon
                      height="21px"
                      width="21px"
                      viewBox="0 0 21px 0"
                      iconId={s.iconId}
                    />
                  </S.SocialLink>
                </S.SocialItem>
              );
            })}
          </S.SocialList>
          <S.Copyright>
            &copy; 2023 Svetlana Dyablo, All Rights Reserved.
          </S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
