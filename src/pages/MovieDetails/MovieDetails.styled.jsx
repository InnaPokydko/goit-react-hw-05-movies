import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
margin: 50px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const StyledBtnLink = styled(Link)`
margin: 20px;
padding: 4px 8px;
  border-radius: 2px;
  background-color: #71B280;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 100;
  min-width: 40px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  
  &:hover {
    background-image: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);
  }
`;

export const MovDetBox = styled.div`
width: 700px;

padding: 20px;
display: flex;
gap: 50px;
flex-wrap: wrap;
justify-content: flex-start;
align-items: left;
`;

export const DetailsBox = styled.ul`
width: 700px;
padding: 10px;
display: flex;
gap: 15px;
flex-wrap: wrap;

`;
