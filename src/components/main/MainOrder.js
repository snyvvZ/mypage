import React from "react";
import styled, { css } from "styled-components";
import variables from "../../styles/variables";

const StyledOrder = styled.article`
  margin-top: 10px;
  position: relative;

  > h2 {
    padding: 27px 0 12px 0;
    margin: 0 15px;
    border-bottom: 1px solid ${variables.gray300};
    font-size: 18px;
    line-height: 27px;
  }

  > div {
    display: flex;
    padding: 10px 0;

    > a {
      width: 25%;
      padding: 7px 0 10px 0;
      text-align: center;

      strong {
        display: block;
        font-size: 20px;
        line-height: 30px;

        ${(props) =>
          props.total === 0 &&
          css`
            // FIXME props 적용
            color: ${variables.gray600};
          `}
      }

      em {
        display: block;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }

  > a {
    display: block;
    position: absolute;
    right: 15px;
    top: 30px;
    font-size: 13px;
    color: ${variables.gray600};
    line-height: 20px;
  }
`;

const MainOrder = ({ data }) => {
  console.log(data);
  return data.map((item, index) => (
    <StyledOrder key={index}>
      <h2>{item.title}</h2>
      <div>
        {item.contents.map((anchor, index) => (
          <a key={index} href={anchor.linkUrl}>
            <strong total={anchor.total}>{anchor.total}</strong>
            <em>{anchor.title}</em>
          </a>
        ))}
      </div>
      <a href={item.linkUrl}>전체</a>
    </StyledOrder>
  ));
};

export default MainOrder;
