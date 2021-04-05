import styled from 'styled-components';

import { StyledInput } from '../../../../../../shared/input/styles';
import { MediaSM } from '../../../../../../shared/media-query';

export const Input = styled(StyledInput)`
  padding-left: 35px;
  width: 272px;

  ${MediaSM`
    width: calc(100vw - 40px);
    max-width: 480px;
  `}
`;

export const Icon = styled.img`
  position: relative;
  top: 40px;
  left: 5px;
  width: 24px;
  margin-top: -17px;
`;
