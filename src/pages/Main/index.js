/**
 * @filename: index.js
 * @description: 메인 페이지 구성
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';
import Project from './Project';
import About from './About';
import Contact from './Contact';

// 메인페이지 영역에 대한 스타일 정의.
const MainContainer = styled.section`
  width: 100%;
`;

/**
 * 메인페이지 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const Main = () => {
  return (
    <MainContainer>
        <Jumbotron />
        <Project />
        <About />
        <Contact />
    </MainContainer>
  );
};

export default Main;