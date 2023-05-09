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
  border-radius: 8px;
  background-color: #ED8F03;
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
    background-image: linear-gradient(to right, #FFB75E 0%, #ED8F03 51%, #FFB75E 100%);
  }
`;

export const MovDetBox = styled.div`
margin: 20px;
padding: 20px;
display: flex;
gap: 60px;
flex-wrap: wrap;
justify-content: flex-start;
align-items: left;
box-shadow: 0px 0px 10px rgba(1, 1, 1, 1.5);
`;

export const DetailsBox = styled.ul`
width: 700px;
padding: 10px;
display: flex;
gap: 80px;
flex-wrap: wrap;

`;

export const InfoDetails = styled.div`
width: 700px;
padding: 10px;
display: flex;
flex-direction: column;
gap: 40px;
flex-wrap: wrap;

`;

export const StyledDeteileLink = styled(Link)`

  color: #fff;
    text-decoration: none;
  cursor: pointer;
  font-family:'Helvetica Neue';
  font-size: 24px;
  line-height: 24px;
  font-style: normal;
  font-weight: 600;
  
  
  &:hover {
    background-image: linear-gradient(to right, #FFB75E 0%, #ED8F03 51%, #FFB75E 100%);
  }
`;

export const GenresBox = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
color: #fff;
`;