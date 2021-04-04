import * as React from 'react';

import { Container, Label } from './styles';
import CurrencyInput from './currency-input';

const TotalAmount = () => {
  return (
    <Container>
      <Label>Total amount</Label>
      <CurrencyInput />
    </Container>
  );
};

export default TotalAmount;
