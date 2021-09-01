import React from "react";
import styled from "styled-components";
import mixins from "../../styles/mixins";
import {
  Ic30StencilBag,
  Ic30StencilHeart,
  Ic30StencilSetting,
} from "../../icons";

const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  justify-content: right;

  > h1,
  > h2 {
    ${mixins.blind};
  }
`;

const StyledAnchor = styled.div`
  margin-left: auto;
  padding: 5px;

  > a {
    display: inline-flex;
    height: 40px;
    padding: 5px;
    box-sizing: border-box;

    & + & {
      margin-left: 5px;
    }

    > svg {
      vertical-align: top;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>무신사 스토어</h1>
      <h2>마이페이지</h2>

      <StyledAnchor>
        <a href="/">
          <Ic30StencilBag />
        </a>
        <a href="/">
          <Ic30StencilHeart />
        </a>
        <a href="/">
          <Ic30StencilSetting />
        </a>
      </StyledAnchor>
    </StyledHeader>
  );
};

export default Header;
