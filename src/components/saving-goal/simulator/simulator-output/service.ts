export const getMonthsInterval = (date: Date): number => {
  const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30.5;
  const deposits = Math.ceil(
    (date.getTime() - new Date().getTime()) / oneMonthInMillis
  );

  return deposits;
};

export const getFormattedDate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric'
  });

  return formatter.format(date);
};

export const getCurrencyFormat = (value: number): string => {
  return Math.ceil(value).toLocaleString('en');
};

export const getMonthlyAmount = (value: number, times: number) => {
  return getCurrencyFormat(value / times);
};
