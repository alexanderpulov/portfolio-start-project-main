import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconId="gotop"
            height="30"
            width="30"
            viewBox={"0 0 30 30"}
          ></Icon>
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
`;
