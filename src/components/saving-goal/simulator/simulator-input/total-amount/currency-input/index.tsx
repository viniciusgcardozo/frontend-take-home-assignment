import * as React from 'react';

import { Input } from './styles';
import { SavingContext } from '../../../../saving-state';

const CurrencyInput = () => {
  const { amount, setAmount } = React.useContext(SavingContext);

  const amountChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newValue = Number(value.replace(/\D/g, ''));
    setAmount(newValue);
  };

  const getCurrencyMask = (value: number): string => {
    const formatter = new Intl.NumberFormat('en');
    return formatter.format(value);
  };

  return (
    <Input
      data-testid="currency-input"
      type="text"
      value={getCurrencyMask(amount)}
      onChange={amountChanged}
    />
  );
};

export default CurrencyInput;
