import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const MovieWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
