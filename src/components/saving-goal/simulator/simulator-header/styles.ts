import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 16px;
`;

export const Title = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
  color: ${({ theme }) => theme?.text?.blueGray900};
`;

export const Subtitle = styled.h4`
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  margin: 0;
`;
