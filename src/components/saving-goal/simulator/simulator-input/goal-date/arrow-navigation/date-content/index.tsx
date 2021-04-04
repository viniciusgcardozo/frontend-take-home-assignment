import * as React from 'react';

import { SavingContext } from '../../../../../saving-state';
import { Container, Month, Year } from './styles';

const DateContent = () => {
  const { date } = React.useContext(SavingContext);

  return (
    <Container>
      <Month>{date.toLocaleString('en', { month: 'long' })}</Month>
      <Year>{date.getFullYear()}</Year>
    </Container>
  );
};

export default DateContent;
