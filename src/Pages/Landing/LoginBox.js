import React from "react";
import styled from  'styled-components';
//import oc from "open-color";
import { Link } from "react-router-dom";

const LoginBox = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo to="/">헬로 Pick</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

//화면 중앙에 위치시키기, 로그인 박스 전체
const Positioner = styled.div`
    position: absolute;
    width: 470px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    zIndex: 9999;
    
`;

//너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 470px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

//로고
const LogoWrapper = styled.div`
    background: white;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background: #ed174d; /* 배경색 추가 및 원하는 색상으로 설정 */
`;

const Logo = styled(Link)`
    color: white;
    font-family: 'Roboto';
    font-size: 2.6rem;
    margin-top: -5px;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
`;

//children 이 들어가는 곳
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background: white;
    padding: 2rem;
    
`;

export default LoginBox;












