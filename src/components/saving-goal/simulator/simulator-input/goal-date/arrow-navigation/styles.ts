import styled from 'styled-components';
import { MediaSM } from '../../../../../../shared/media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: white;
  border: 1px solid ${({ theme }) => theme?.text?.$blueGray50};
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 7px;
  width: 192px;
  height: 56px;

  ${MediaSM`
    width: calc(100vw - 40px);
    max-width: 480px;
  `}
`;

const Arrow = styled.img`
  display: flex;
  height: 46px;
  padding: 15px;
  cursor: pointer;
`;

export const ArrowRight = styled(Arrow as any)`
  transform: rotate(180deg);
`;

export const ArrowLeft = Arrow;
