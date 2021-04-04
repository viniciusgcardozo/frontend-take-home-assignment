import * as React from 'react';

import { Container, TextWrapper, Title, Subtitle } from './styles';
import house from '../../../../assets/icons/house.svg';

const SimulatorHeader = () => {
  return (
    <Container>
      <img style={{ width: 64, height: 64 }} src={house} alt="house" />
      <TextWrapper>
        <Title>Buy a house</Title>
        <Subtitle>Saving goal</Subtitle>
      </TextWrapper>
    </Container>
  );
};

export default SimulatorHeader;
