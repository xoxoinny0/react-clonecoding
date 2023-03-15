/**
 * @filename: Footer.js
 * @description: Footer 공통 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

/** Footer 컴포넌트 스타일 정의 */
const FooterContainer = styled.footer`
  width : 100%;
  height: 40px;
  background-color: #000;
  padding: 20px 0;

  ${mq.maxWidth('sm')`
    padding: 10px;
  `}

  p {
    text-align: center;
    line-height: 20px;
    font-size: 15px;
    color : #fff;

    a {
      text-decoration: underline;
      color : #fff;
    }
  }
`;

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Footer = memo(() => {
  return (
    <FooterContainer>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" rel="noreferrer">w3.css</a></p>
  </FooterContainer>
  );
});

export default Footer;