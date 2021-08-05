import * as React from 'react';

import { Container, House, TextWrapper, Title, Subtitle } from './styles';

type HeaderProps = {
  icon: string;
  title: string;
};

const SimulatorHeader = ({ icon, title }: HeaderProps) => {
  return (
    <Container>
      <House src={icon} alt="house" />
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>Saving goal</Subtitle>
      </TextWrapper>
    </Container>
  );
};

export default SimulatorHeader;
