import styled from 'styled-components';

import currency from '../../../../../../assets/icons/currency.svg';
import { StyledInput } from '../../../../../../shared/input/styles';
import { MediaSM } from '../../../../../../shared/media-query';

export const Input = styled(StyledInput)`
  background: #ffffff url(${currency}) no-repeat left;
  background-position: 7px 15px;
  margin-top: 7px;
  padding-left: 35px;
  width: 272px;

  ${MediaSM`
    width: calc(100vw - 40px);
    max-width: 480px;
  `}
`;
