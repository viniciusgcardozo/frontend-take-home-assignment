import * as React from 'react';
import { Container, MainContent, Title, Value, Subtitle } from './styles';
import { SavingContext } from '../../saving-state';
import {
  getMonthsInterval,
  getCurrencyFormat,
  getFormattedDate,
  getMonthlyAmount
} from './service';

const SimulatorOutput = () => {
  const { amount, date } = React.useContext(SavingContext);

  const depositCount = getMonthsInterval(date);

  return (
    <Container>
      <MainContent>
        <Title>Monthly amount</Title>
        <Value>${getMonthlyAmount(amount, depositCount)}</Value>
      </MainContent>
      <Subtitle>
        You&apos;re planning <b>{depositCount} monthly deposits</b> to reach
        your <b>${getCurrencyFormat(amount)}</b> goal by{' '}
        <b>{getFormattedDate(date)}.</b>
      </Subtitle>
    </Container>
  );
};

export default SimulatorOutput;
