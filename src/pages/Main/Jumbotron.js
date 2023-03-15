/**
 * @filename: Jumbotron.js
 * @description: Jumbotron 영역 컴포넌트
 */

/** 패키지 참조 */
import React, {memo} from 'react';
import styled from 'styled-components';
import img from '../../assets/img/header.jpg';

/** Jumbotron 컴포넌트 스타일 정의 */
const JumbotronContainer = styled.div`
  max-width: 1500px;
  margin: auto;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 38px;
    color : #fff;
    letter-spacing: 5px;
    position: absolute;
    z-index: 1;
    left: 50%; 
    top: 50%;
    transform: translate(-50%,-50%); 

    span {
        font-weight: bolder;
        background-color: #000;
        opacity: 0.75;
        padding: 6px 16px;
    }
  }

`;

/**
 * Jumbotron 컴포넌트 구현
 * @returns {JSX.Element}
 */
 const Jumbotron = memo(() => {
    return (
      <JumbotronContainer>
        <img src={img} alt="headerimg" />
        <div>
          <h1><span>BR</span>Architects</h1>
        </div>
      </JumbotronContainer>
    )
  });

export default Jumbotron;