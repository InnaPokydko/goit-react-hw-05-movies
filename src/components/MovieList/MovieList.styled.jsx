import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 20px;
`;

export const List = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 15px;
padding: 15px;
`;

export const Poster = styled.img`

width: 100%;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #ccc;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
padding: 15px;
background: #fff;
 
  :hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
text-align: center;
font-family: 'Ubuntu';
font-size: 1.5rem;
margin-top: 10px;
margin-bottom: 0;
align-items: center;
color: black;
`;

export const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50px; 
background-color: rgba(0, 0, 0, 0.8); 
position: absolute; 
bottom: 0;
width: 100%; 
opacity: 0; 
transition: opacity 0.2s ease-in-out;`

export const MovieLink = styled(Link)`
text-decoration: none;
color: inherit;
`;