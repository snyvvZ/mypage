import React from "react";
import styled from "styled-components";
import variables from "../../styles/variables";

const StyledBanner = styled.a`
  display: block;
  margin: 12px 15px 0 15px;
  font-family: ${variables.fontMusinsa};
  color: ${variables.white};

  figure {
    display: flex;
    align-items: center;
    height: 80px;
    padding-left: 15px;
    background-color: ${variables.gray800};
    border-radius: 6px;

    img {
      flex: none;
      width: 110px;
      height: 90px;
      margin-left: auto;
      vertical-align: top;
    }

    figcaption {
      margin-right: 5px;
      line-height: 21px;

      > strong {
        display: inline-block;
        font-size: 15px;
      }

      > span {
        display: inline-block;
        font-size: 14px;
        opacity: 0.65;
      }
    }
  }
`;

const MainBanner = ({ data }) => {
  const banner = data.contents[0];

  if (banner.length === 0) {
    return null;
  } else {
    return (
      <StyledBanner key={banner.idx} href={banner.Url}>
        <figure>
          <figcaption>
            <strong>{banner.extra1}</strong>
            <span>{banner.extra2}</span>
          </figcaption>
          <img src={banner.imageFile} alt="" />
        </figure>
      </StyledBanner>
    );
  }
};

export default MainBanner;
