import * as React from 'react';
import { screen, render } from '@testing-library/react';

import SimulatorOutput from '.';
import { SavingProviderMock } from '../../saving-state';
import * as Service from './service';
import { getByTextDeep } from '../../../../utils/spec-helper';

describe('SimulatorOutput =>', () => {
  it('should display output main text', () => {
    render(
      <SavingProviderMock initState={{}}>
        <SimulatorOutput />
      </SavingProviderMock>
    );

    expect(screen.getByText('Monthly amount')).toBeInTheDocument();
  });

  it('should display output main value', () => {
    jest.spyOn(Service, 'getMonthlyAmount').mockImplementation(() => '1,000');

    render(
      <SavingProviderMock initState={{ amount: 10000 }}>
        <SimulatorOutput />
      </SavingProviderMock>
    );

    expect(screen.getByText('$1,000')).toBeInTheDocument();
  });

  it('should display output subtitle', () => {
    jest.spyOn(Service, 'getMonthsInterval').mockImplementation(() => 10);
    jest.spyOn(Service, 'getCurrencyFormat').mockImplementation(() => '10,000');
    jest
      .spyOn(Service, 'getFormattedDate')
      .mockImplementation(() => 'May 2021');

    render(
      <SavingProviderMock initState={{ amount: 10000 }}>
        <SimulatorOutput />
      </SavingProviderMock>
    );

    expect(
      getByTextDeep(
        `You're planning 10 monthly deposits to reach your $10,000 goal by May 2021.`
      )
    ).toBeInTheDocument();
  });
});
