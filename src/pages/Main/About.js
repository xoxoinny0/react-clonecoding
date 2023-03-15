/**
 * @filename: About.js
 * @description: About 영역 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'


/** 메인 About 영역 스타일 정의 */
const AboutContainer = styled.div`
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

            img {
                width: 100%;
                object-fit: cover;
                filter: grayscale(0.75);

            }

            h2 {
                color: #757575;
            }

            button {
                width: 100%;
                cursor: pointer;
                border : none;
                padding : 8px 16px;
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
    }
`;

// 이미지와 제목에 대한 JSON 배열
const imgList = [
    {img: img1, name: 'John Doe', job: 'CEO & Founder', text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.' },
    {img: img2, name: 'Jane Doe',  job: 'Architect', text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.' },
    {img: img3, name: 'Mike Ross',  job: 'Architect', text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.' },
    {img: img4, name: 'Dan Star',  job: 'Architect', text:'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.' },
]

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const About = memo(() => {
  return (
    <AboutContainer>
        <h3>About</h3>
        <hr />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul>
            {imgList.map(({img, name, job, text}, i) => {
                return (
                    <li key={i}>
                        <img src={img} alt={name} />
                        <h3>{name}</h3>
                        <h2>{job}</h2>
                        <p>{text}</p>
                        <button type='button'>Contact</button>
                    </li>
                );
            })}
        </ul>

    </AboutContainer>
  );
});

export default About;