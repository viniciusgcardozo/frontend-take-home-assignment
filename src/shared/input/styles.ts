import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 56px;
  border: 1px solid ${({ theme }) => theme?.text?.$blueGray50};
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: ${({ theme }) => theme?.text?.$blueGray600};
`;
