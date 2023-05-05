import styled from '@emotion/styled';

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
align-items: center;
border: 1px solid #ccc;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
padding: 15px;
 
  :hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
font-size: 1.5rem;
margin-top: 10px;
margin-bottom: 0;
align-items: center;
`;
