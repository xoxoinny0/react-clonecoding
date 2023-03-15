/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 *               전역 스타일(GlobalSytels)과 전역 SEO 구성(Meta),
 *               라우팅 범위를 설정(BrowerRouter)하고 프로그램을 시작(App)한다.
 */

/** 패키지 참조 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 라우팅 범위 설정
import { BrowserRouter } from 'react-router-dom';
// SEO 구현
import Meta from './Meta';
// 전역 스타일 정의
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

