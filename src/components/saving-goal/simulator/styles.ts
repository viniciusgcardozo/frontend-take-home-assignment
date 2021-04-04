import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 28px 40px;
  > * {
    margin: 12px 0;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.primary};
  border-radius: 32px;
  border: none;
  width: 320px;
  height: 56px;
  color: white;
`;