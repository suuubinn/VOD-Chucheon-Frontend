import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import Weather from "./Weather";

const HeaderCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  
  const changePage = path => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Logo>
        <LogoLink>
          <LogoImg src="/images/LG_logo.png" />
        </LogoLink>
      </Logo>
      <CategoryList active={pathname === '/main'} onClick={() => changePage("/main")}>
        홈
      </CategoryList>
      <CategoryList active={pathname === '/Category/tvdrama'} onClick={() => changePage("/Category/tvdrama")}>
        TV 드라마
      </CategoryList>
      <CategoryList active={pathname === '/Category/tvshow'} onClick={() => changePage("/Category/tvshow")}>
        TV방송
      </CategoryList>
      <CategoryList active={pathname === '/Category/movie'} onClick={() => changePage("/Category/movie")}>
        영화
      </CategoryList>
      <CategoryList active={pathname === '/search'} onClick={() => changePage("/search")}>
        검색
      </CategoryList>
      <WeatherContainer>
        <Weather />
      </WeatherContainer>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #181818;
  list-style-type: none;
  margin: 15px -100px;
`;

const Logo = styled.li`
  margin: 0.1px 50px 0 80px;
`;

const LogoLink = styled.a`
    height: 68px;
`;

const LogoImg = styled.img`
  margin: 0;
  width: 310px;
  height: 300px;
  object-fit: contain;
  align-items: center;
`;

const CategoryList = styled.li`
  color: ${props => (props.active ? '#ED174D' : 'white')};
  font-size: 20px;
  margin: 0px 20px 5px 60px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${props => (props.active ? '#ED174D' : 'transparent')};
    bottom: 0;
    left: 0;
    transition: background-color 0.3s ease;
  }

  &:hover {
    color: #ED174D;
  }
`;

const WeatherContainer = styled.div`
  margin-left: 50px; /* 검색 아이콘 오른쪽으로 이동 */
  display: flex;
  align-items: center;
`;

export default HeaderCategory;
