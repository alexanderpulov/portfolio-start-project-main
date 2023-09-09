import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <S.MobileMenu>
      <S.BurgerButton
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        isOpen={menuIsOpen}
      >
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
