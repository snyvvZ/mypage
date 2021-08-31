import React from "react";
import styled from "styled-components";
import { Ic14LineArrowRight, Ic18LineQuestion } from "../../icons";

const StyledUser = styled.section`
  display: flex;
  padding: 20px 15px 42px 15px;
`;

const StyledInformation = styled.div`
  margin-right: 40px;
`;

const StyledTitle = styled.h1`
  > a {
    display: flex;
    align-items: center;

    > strong {
      font-size: 30px;
      line-height: 39px;
      word-break: break-all;
    }

    > svg {
      flex: none;
      margin-left: 2px;
    }
  }
`;

const StyledLevel = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 4px;
  font-size: 13px;
  line-height: 20px;

  > span {
    color: #777;
    margin-right: 4px;
  }
`;

const StyledThumbnail = styled.a`
  flex: none;
  display: block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-left: auto;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 100%;
  box-sizing: border-box;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const MainUser = ({ data }) => {
  return (
    <StyledUser>
      <StyledInformation>
        <StyledTitle>
          <a href={data.linkUrl} aria-label="회원정보 수정 페이지로 이동">
            <strong>{data.title}</strong>
            <Ic14LineArrowRight />
          </a>
        </StyledTitle>
        <StyledLevel
          href={data.benefitLinkUrl}
          aria-label="회원혜택 페이지로 이동"
        >
          <span>{data.level}</span>
          <em>{data.levelName}</em>
          <Ic18LineQuestion />
        </StyledLevel>
      </StyledInformation>

      <StyledThumbnail
        href={data.linkUrl}
        aria-label="회원정보 수정 페이지로 이동"
      >
        <img src={data.profileImageUrl} alt={`{data.title}의 프로필 이미지`} />
      </StyledThumbnail>
    </StyledUser>
  );
};

export default MainUser;
