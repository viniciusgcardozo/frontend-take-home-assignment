import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 80px);
`;

export const SavingHeader = styled.p`
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 24px;
  text-align: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
`;
