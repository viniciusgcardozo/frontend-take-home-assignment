import * as React from 'react';

import { SavingContext, SavingContextType } from '.';

type MockProps = {
  initState: Partial<SavingContextType>;
  children: React.ReactNode;
};

export const SavingProviderMock = ({ initState, children }: MockProps) => {
  const { date: d, amount: a } = initState;

  const [date, setDate] = React.useState(d || new Date());
  const [amount, setAmount] = React.useState(a || 0);

  return (
    <SavingContext.Provider value={{ date, setDate, amount, setAmount }}>
      {children}
    </SavingContext.Provider>
  );
};
