import * as Service from '.';

describe('SimulatorOutputService =>', () => {
  describe('getMonthsInterval =>', () => {
    it('should return 1 when receiveing next month', () => {
      const nextMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate()
      );

      expect(Service.getMonthsInterval(nextMonth)).toEqual(1);
    });

    it('should return 12 when receives next year', () => {
      const nextMonth = new Date(
        new Date().getFullYear() + 1,
        new Date().getMonth(),
        new Date().getDate()
      );

      expect(Service.getMonthsInterval(nextMonth)).toEqual(12);
    });
  });

  it('getFormattedDate => should return May 2021 when receives that date', () => {
    const date = new Date('2021-5-6');
    expect(Service.getFormattedDate(date)).toEqual('May 2021');
  });

  describe('getCurrencyFormat =>', () => {
    it('should not change format when receives a number less than 1000', () => {
      expect(Service.getCurrencyFormat(1)).toEqual('1');
      expect(Service.getCurrencyFormat(12)).toEqual('12');
      expect(Service.getCurrencyFormat(123)).toEqual('123');
    });

    it('should format value when receives a number greater than 999', () => {
      expect(Service.getCurrencyFormat(1234)).toEqual('1,234');
      expect(Service.getCurrencyFormat(12345)).toEqual('12,345');
      expect(Service.getCurrencyFormat(123456)).toEqual('123,456');
      expect(Service.getCurrencyFormat(1234567)).toEqual('1,234,567');
    });
  });

  it('getMonthlyAmount => should calculate and format result', () => {
    const spy = jest.spyOn(Service, 'getCurrencyFormat');

    const result = Service.getMonthlyAmount(10000, 10);
    expect(spy).toHaveBeenCalledWith(1000);
    expect(result).toEqual('1,000');
  });
});
