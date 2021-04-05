import * as React from 'react';

import Arrow from '../../../../../../assets/icons/arrow.svg';
import { Container, ArrowLeft, ArrowRight } from './styles';
import { SavingContext } from '../../../../saving-state';
import DateContent from './date-content';

const ArrowNavigation = () => {
  const { date, setDate } = React.useContext(SavingContext);

  const decreaseMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    if (newDate < new Date()) return;
    setDate(newDate);
  };

  const increaseMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(newDate);
  };

  return (
    <Container>
      <ArrowLeft alt="arrow-left" src={Arrow} onClick={decreaseMonth} />
      <DateContent />
      <ArrowRight alt="arrow-right" src={Arrow} onClick={increaseMonth} />
    </Container>
  );
};

export default ArrowNavigation;
