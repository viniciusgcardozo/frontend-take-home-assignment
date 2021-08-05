import styled from 'styled-components';

export const Container = styled.div`
  width: 272px;
  height: 248px;
  margin: 16px;
  background: white;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  box-shadow: 0px 8px 24px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px 24px 24px 24px;
`;

export const Image = styled.img``;

export const Title = styled.p`
  margin-top: 8px;
  margin-bottom: 56px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme?.color?.primary};
  width: 224px;
  height: 40px;
  border: none;
  border-radius: 32px;
  left: calc(50% - 85px / 2 + 0.5px);
  top: calc(50% - 20px / 2);
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: white;
`;
