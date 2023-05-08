import styled from '@emotion/styled';

export const ReviewsBox = styled.div`
width: 900px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

export const ReviewItem = styled.li`
  border-radius: 4px;
  background-color: #221c21;
  padding: 20px;
  box-shadow: 0px 1px 2px rgb(255 158 0 / 40%), 0px 2px 4px rgb(255 0 245 / 30%),
    0px 4px 8px rgb(255 221 0 / 40%), 0px 4px 16px rgb(255 247 254 / 10%);
`;

export const Text = styled.p`
font-family: 'Roboto';
color: #fff;
    font-size: 14px;
  line-height: 24px;
  font-style: normal;
  font-weight: 100;

`;

export const H3 = styled.h3`
color: #ED8F03;
font-size: 18px;
`;

export const NotFoundText = styled.h3`
font-family: 'Roboto';
color: #fff;
font-size: 24px;
line-height: 24px;
font-style: normal;
font-weight: 400;

`;