/**
 * @filename: Contact.js
 * @description: Contact 영역 컴포넌트
 */

/** 패키지 참조 */
import React, { memo } from 'react';
import styled from 'styled-components';
import img from '../../assets/img/last.jpg'

/** 메인 Contact 영역 스타일 정의 */
const ContactContainer = styled.div`
    padding : 8px 30px;

    form {
        input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border : 1px solid #ccc;
        padding: 8px;
        margin-bottom: 10px;
        }  

        button {
            background: #000;
            color : #fff;
            border: none;
            padding: 8px 16px;
            margin : 20px 0 35px 0;
        }
    } 

    img {
        width: 100%;
        object-fit: cover;
    }
`;

// input 태그 생성을 위한 배열
const inputArr = ['Name', 'Email', 'Subject', 'Comment'];

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Contact = memo(() => {
  return (
    <ContactContainer>
        <h3>Contact</h3>
        <hr />
        <p>Lets get in touch and talk about your next project.</p>
        <form>
            {inputArr.map((v, i) => {
                return (
                    <input key={i} type="text" placeholder={v}></input>
                )
            })}
            <button type="button"><i>SEND MESSAGE</i></button>
        </form>
        <img src={img} />
    </ContactContainer>
  )
});

export default Contact