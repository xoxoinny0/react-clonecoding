/**
 * @filename: App.js
 * @description: 레이아웃 구성 컨테이너
 */

/** 패키지 참조 */
import React from "react";
// 라우팅처리
import {Routes, Route} from 'react-router-dom';
// 모든 페이지 공용 컴포넌트
import Header from "./common/Header";
import Footer from './common/Footer';
import Main from './pages/Main';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path='/' exact={true} element={<Main />} />
    </Routes>
    <Footer />
   </div>
  );
};

export default App;
