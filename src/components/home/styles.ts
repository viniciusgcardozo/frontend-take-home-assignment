import styled from 'styled-components';
import { MediaSM } from '../../shared/media-query';

export const Container = styled.div`
  margin: 39px 152px 0 152px;

  ${MediaSM`margin: 0`}
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Text = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: ${({ theme }) => theme?.text?.$blueGray900};
  text-align: center;

  ${MediaSM`font-size: 24px;`}
`;
