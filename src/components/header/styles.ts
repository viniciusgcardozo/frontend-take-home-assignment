import styled from 'styled-components';
import { MediaSM } from '../../shared/media-query';

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  background-color: white;

  ${MediaSM`
    display: flex;
    align-items: center;
    height: 56px;
  `}
`;

export const Logo = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  margin-left: 56px;

  ${MediaSM`
    height: 24px;
    margin-left: 16px;
  `}
`;
