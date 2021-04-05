import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBase = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-size: 16px;
  line-height: 150%;
`;

export const Month = styled(ContentBase as any)`
  font-weight: 600;
  color: ${({ theme }) => theme?.text?.$blueGray900};
`;

export const Year = styled(ContentBase as any)`
  font-weight: 400;
  color: ${({ theme }) => theme?.text?.$blueGray400};
`;
