/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 *               이 파일에서 정의한 class는 RecatJSX에서 className 속성으로 참조해야 한다.
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";
// reset.css
import reset from "styled-reset";

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent}
 */
const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        margin: 0;
        padding: 0;

  }

    a {
        text-decoration: none;
    }

    h3 {
        padding: 30px 0 16px 0;
        font-size: 24px;
        font-weight: 500;
    }

    p {
        font-size: 17px;
        margin : 15px 0;
        line-height: 1.5;
}

    hr {
        margin : 20px 0px;
        border-top : 0.3px solid #eee;
    }
`;

export default GlobalStyle;