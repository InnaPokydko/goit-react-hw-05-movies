import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: linear-gradient(15deg, #13547a 0%, #26a0da 100%);
`;

export const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;


export const Footer = styled.header`
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  // padding: 20px;
  // background-image: linear-gradient(15deg, #13547a 0%, #26a0da 100%);
  // margin-top: 50px;
  height: 50px;
`;