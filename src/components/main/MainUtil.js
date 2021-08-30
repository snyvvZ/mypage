import React from "react";
import styled from "styled-components";
import {
  Ic40StencilCoupon,
  Ic40StencilMoney,
  Ic40StencilPoint,
  Ic40StencilReview,
} from "../../icons";

const StyledUtil = styled.div``;

const StyledAnchor = styled.a``;

const icons = [
  Ic40StencilCoupon,
  Ic40StencilMoney,
  Ic40StencilPoint,
  Ic40StencilReview,
];

const MainUtil = ({ data, icons }) => {
  console.log(data);
  return (
    <StyledUtil>
      {data.contents.map((item) => (
        <StyledAnchor href={item.linkURL}>
          {item.title}
          {item.total}
        </StyledAnchor>
      ))}
    </StyledUtil>
  );
};

export default MainUtil;
