import * as React from 'react';

export type SavingContextType = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const SavingContext = React.createContext({} as SavingContextType);

export const SavingProvider: React.FC = ({ children }) => {
  const today = new Date();
  const nextMonth = new Date(today.setMonth(today.getMonth() + 1));

  const [date, setDate] = React.useState(nextMonth);
  const [amount, setAmount] = React.useState(0);

  const state = { amount, setAmount, date, setDate };

  return (
    <SavingContext.Provider value={state}>{children}</SavingContext.Provider>
  );
};

export * from './saving-state.mock';
