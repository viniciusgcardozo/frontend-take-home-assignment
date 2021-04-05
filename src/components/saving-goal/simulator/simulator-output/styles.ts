import styled from 'styled-components';
import { MediaSM } from '../../../../shared/media-query';

export const Container = styled.div`
  width: 480px;
  border: 1px solid ${({ theme }) => theme.text.$blueGray50};
  box-sizing: border-box;
  border-radius: 8px;

  ${MediaSM`
    max-width: 480px;
    width: calc(100vw - 40px)
  `}
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  padding: 24px 32px;
`;

export const Title = styled.h3`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  color: ${({ theme }) => theme.text.$blueGray900};
`;

export const Value = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  text-align: right;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Subtitle = styled.p`
  background: ${({ theme }) => theme.text.$blueGray10};
  border-radius: 8px;
  padding: 24px 32px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.text.$blueGray900};
`;
