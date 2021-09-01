import React from 'react';
import styled from 'styled-components';
import { Ic40StencilCoupon, Ic40StencilMoney, Ic40StencilPoint, Ic40StencilReview } from '../../icons';

const StyledUtil = styled.div`
  
`;

const StyledAnchor = styled.a``;

const MainUtil = ({ data }) => {
  console.log(data);
  
  return (
    <StyledUtil>
      {data.contents.map((item) => (
        <StyledAnchor href={item.linkURL}>
          <Ic40StencilMoney />
          {item.title}
          {item.total}
        </StyledAnchor>
      ))}
    </StyledUtil>
  )
};

export default MainUtil;