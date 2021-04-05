import styled from 'styled-components';
import { MediaSM } from '../../../../../shared/media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${MediaSM`
    margin: 0;
    align-items: center;
  `}
`;

export const Label = styled.label`
  text-align: left;

  ${MediaSM`
    width: calc(100vw - 40px);
    max-width: 480px;
  `}
`;
