import * as React from 'react';

import { Container, House, TextWrapper, Title, Subtitle } from './styles';
import house from '../../../../assets/icons/house.svg';

const SimulatorHeader = () => {
  return (
    <Container>
      <House src={house} alt="house" />
      <TextWrapper>
        <Title>Buy a house</Title>
        <Subtitle>Saving goal</Subtitle>
      </TextWrapper>
    </Container>
  );
};

export default SimulatorHeader;
