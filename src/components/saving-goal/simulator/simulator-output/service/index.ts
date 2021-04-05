export const getMonthsInterval = (date: Date): number => {
  const monthDiff = date.getMonth() - new Date().getMonth();
  const yearDiff = (date.getFullYear() - new Date().getFullYear()) * 12;

  return monthDiff + yearDiff;
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
