import styled from 'styled-components';
import { MediaSM } from '../../shared/media-query';

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 99;

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

  ${MediaSM` height: 24px; `}
`;
