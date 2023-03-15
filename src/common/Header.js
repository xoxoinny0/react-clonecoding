/**
 * @filename: Header.js
 * @description: Header 공통 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import mq from '../MediaQuery';

// import mq from '../MediaQuery';

/** Header 컴포넌트 스타일 정의 */
const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2);
    padding: 8px 16px;
    box-sizing: border-box;

    .navwrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
        padding: 8px 16px;
        letter-spacing: 4px;
        font-size: 15px;
        color: #000;

        &:hover {
            background: rgba(0, 0, 0, 0.2);
        }

        span {
            font-weight: bolder;
        }
        
        }

        .gnb {
            ${mq.maxWidth('sm')`
            display: none;
            `}
        }
    }
`;

const Header = memo(() => {
  return (
    <HeaderContainer>
        <div className='navwrap'>
            <HashLink to='#'><span>BR</span> Architects</HashLink>
            <div className='gnb'>
                <HashLink to='/#Projects'>Projects</HashLink>
                <HashLink to='/#About'>About</HashLink>
                <HashLink to='/#Contact'>Contact</HashLink>
            </div>
        </div>
    </HeaderContainer>
  );
});

export default Header;