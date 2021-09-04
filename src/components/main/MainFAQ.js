import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";
import { Ic18LineQuestion } from "../../icons";

const StyledBlock = styled.p`
  padding: 0 15px 30px 15px;
  border-bottom: 10px solid ${variables.gray300};

  > a {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    line-height: 21px;
    color: ${variables.gray700};
  }
`;

const MainFAQ = ({ data }) => {
  return (
    <StyledBlock>
      <a href={data.linkUrl}>
        <Ic18LineQuestion />
        {data.title}
      </a>
    </StyledBlock>
  );
};

export default MainFAQ;
