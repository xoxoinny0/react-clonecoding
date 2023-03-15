/**
 * @filename: Project.js
 * @description: Project 영역 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import img01 from '../../assets/img/img01.jpg'
import img02 from '../../assets/img/img02.jpg'
import img03 from '../../assets/img/img03.jpg'
import img04 from '../../assets/img/img04.jpg'

/** 메인 Project 영역 스타일 정의 */
const ProjectContainer = styled.div`
    padding: 8px 30px;

    ul {
        display: flex;
        ${mq.maxWidth('sm')`
            flex-wrap: wrap;
        `}

        ${mq.maxWidth('md')`
            flex-wrap: wrap;
        `}

        li {
            width: 25%;
            margin : 0 15px 8px 0;
            position: relative;

            ${mq.maxWidth('md')`
                margin : 0 5px;
                width: 48%;
            `}

            ${mq.maxWidth('sm')`
                width: 100%;
            `}

            &:last-child {
                margin-right: 0;
            }

           div {
                color: #fff;
                background-color: #000;
                position: absolute;
                z-index: 1;
                padding: 8px 16px;
                line-height: 1.5;
           }
            
            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;

// 이미지와 제목에 대한 JSON 배열
const imgList = [
    {img: img01, title: 'Summer House'},
    {img: img02, title: 'Brick House'},
    {img: img03, title: 'Renovated'},
    {img: img04, title: 'Barn House'},
]

const imgList2 = [
    {img: img02, title: 'Summer House'},
    {img: img01, title: 'Brick House'},
    {img: img04, title: 'Renovated'},
    {img: img03, title: 'Barn House'},
]

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Project = memo(() => {
  return (
    <ProjectContainer>
        <h3>Projects</h3>
        <hr />
        <ul>
            {imgList.map(({img, title}, i) => {
                return (
                    <li key={i}>
                        <div>{title}</div>
                        <img src={img} alt={title} />
                    </li>
                )
            })}
        </ul>
        <ul>
            {imgList2.map(({img, title}, i) => {
                return (
                    <li key={i}>
                        <div>{title}</div>
                        <img src={img} alt={title} />
                    </li>
                )
            })}
        </ul>
    </ProjectContainer>
  )
});

export default Project;