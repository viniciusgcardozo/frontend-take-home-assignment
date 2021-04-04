import * as React from 'react';

import { Input, Icon } from './styles';
import currency from '../../../../../../assets/icons/currency.svg';
import { SavingContext } from '../../../../saving-state';

const CurrencyInput = () => {
  const { amount, setAmount } = React.useContext(SavingContext);
  const [value, setValue] = React.useState(amount);

  React.useEffect(() => {
    if (value !== amount) setAmount(value);
  }, [amount, setAmount, value]);

  const amountChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newValue = Number(value.replace(/,/g, '').replace(/\./g, ''));
    setValue(newValue);
  };

  const getCurrencyMask = (value: number): string => {
    const formatter = new Intl.NumberFormat('en', {
      maximumSignificantDigits: 2
    });

    return formatter.format(value);
  };

  return (
    <>
      <Icon src={currency} />
      <Input
        type="text"
        value={getCurrencyMask(amount)}
        onChange={amountChanged}
      />
    </>
  );
};

export default CurrencyInput;
