import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const StyledMenu = styled.dl`
  margin-top: 30px;

  > dt {
    padding: 0 15px;
    font-size: 14px;
    color: ${variables.gray600};
    line-height: 34px;
  }

  > dd {
    a {
      display: block;
      padding: 0 15px;
      font-size: 16px;
      font-weight: bold;
      line-height: 50px;
    }
  }
`;

const MainMenu = ({ data }) => {
  return data.map((item, index) => (
    <StyledMenu key={index}>
      <dt>{item.title}</dt>
      {item.contents.map((menu, index) => (
        <dd key={index}>
          <a href={menu.linkUrl}>{menu.title}</a>
        </dd>
      ))}
    </StyledMenu>
  ));
};

export default MainMenu;
