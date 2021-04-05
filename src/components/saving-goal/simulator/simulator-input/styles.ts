import styled from 'styled-components';
import { MediaSM } from '../../../../shared/media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${MediaSM`
    flex-direction: column;
  `}
`;
