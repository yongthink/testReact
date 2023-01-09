import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';
import kakao from './images/ic-kakao.png';
import google from './images/ic-google.png';
import apple from './images/ic-apple.png';
import naver from './images/ic-line.png';

import Signup from "./signup";

function Login() {
    return (
        <div className="Login">
            <div className="LoginHeader">
                <h1>오늘어디가?</h1>
                <h6>당신의 승리를 예약해드립니다.</h6>
            </div>
            <div className="LoginBox">
                <h1>Login</h1>
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="ID"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPW">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="PW"></Form.Control>
                    </Form.Group>

                    <Button variant="login">Login</Button>
                </Form>
                <br />
                <div className="loginLink">
                    <span className="left">아이디·패스워드 찾기</span>
                    <span className="right">
                        <Link to="/signup">회원가입</Link>
                    </span>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </div>
                <br />
                <Button variant="lKakao"><img src={kakao} alt="kakao" /> 카카오톡으로 로그인</Button>
                <br />
                <Button variant="lGoogle"><img src={google} alt="google" /> 구글 계정으로 로그인</Button>
                <br />
                <Button variant="lApple"><img src={apple} alt="apple" /> 애플 계정으로 로그인</Button>
                <br />
                <Button variant="lNaver"><img src={naver} alt="naver" /> 네이버 계정으로 로그인</Button>
            </div>
        </div>
    );

}

export default Login;