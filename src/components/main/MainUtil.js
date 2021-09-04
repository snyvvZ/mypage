import React from "react";
import styled from "styled-components";
import {
  Ic40StencilCoupon,
  Ic40StencilMoney,
  Ic40StencilPoint,
  Ic40StencilReview,
} from "../../icons";

const StyledUtil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-top: 10px solid #f1f1f1;
`;

const StyledAnchor = styled.a`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 5px 0 3px 0;
  text-align: center;

  > svg {
    margin: 0 auto;
    vertical-align: top;
  }

  > span {
    display: block;
    font-size: 12px;
    line-height: 18px;
    color: #777;
  }

  > strong {
    display: block;
    margin-top: 6px;
    font-size: 16px;
    line-height: 24px;
  }
`;

const MainUtil = ({ data }) => {
  return (
    <StyledUtil>
      {data.contents.map((item, index) => (
        <StyledAnchor key={index} href={item.linkUrl}>
          {item.code === "saving" ? (
            <Ic40StencilMoney />
          ) : item.code === "point" ? (
            <Ic40StencilPoint />
          ) : item.code === "coupon" ? (
            <Ic40StencilCoupon />
          ) : (
            <Ic40StencilReview />
          )}
          <span>{item.title}</span>
          <strong>{item.total}</strong>
        </StyledAnchor>
      ))}
    </StyledUtil>
  );
};

export default MainUtil;
