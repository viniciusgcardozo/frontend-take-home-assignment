import * as React from 'react';
import { screen, render } from '@testing-library/react';

import DateContent from '.';
import { SavingProviderMock } from '../../../../../saving-state';

describe('DateContent =>', () => {
  it('should display month with correct format', () => {
    render(
      <SavingProviderMock initState={{ date: new Date('2021-1-1') }}>
        <DateContent />
      </SavingProviderMock>
    );

    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('should display year with correct format', () => {
    render(
      <SavingProviderMock initState={{ date: new Date('2021-1-1') }}>
        <DateContent />
      </SavingProviderMock>
    );

    expect(screen.getByText('2021')).toBeInTheDocument();
  });
});
