import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import ArrowNavigation from '.';
import { SavingProviderMock } from '../../../../saving-state';

describe('ArrowNavigation =>', () => {
  describe('ArrowRight  =>', () => {
    it('should increase month when clicking arrow right', async () => {
      render(
        <SavingProviderMock initState={{ date: new Date('2048-1-1') }}>
          <ArrowNavigation />
        </SavingProviderMock>
      );

      await fireEvent.click(await screen.findByAltText('arrow-right'));

      expect(await screen.findByText('February')).toBeInTheDocument();
    });

    it('should increase year when clicking arrow right and month is December', async () => {
      render(
        <SavingProviderMock initState={{ date: new Date('2049-12-1') }}>
          <ArrowNavigation />
        </SavingProviderMock>
      );

      await fireEvent.click(screen.getByAltText('arrow-right'));

      expect(await screen.findByText('2050')).toBeInTheDocument();
    });
  });

  describe('ArrowLeft  =>', () => {
    it('should decrease month when clicking arrow left and month is greater than next month', async () => {
      render(
        <SavingProviderMock initState={{ date: new Date('2048-2-1') }}>
          <ArrowNavigation />
        </SavingProviderMock>
      );

      await fireEvent.click(screen.getByAltText('arrow-left'));

      expect(await screen.findByText('January')).toBeInTheDocument();
    });

    it('should not decrease month when clicking arrow left and month is not greater than next month', async () => {
      render(
        <SavingProviderMock initState={{ date: new Date('2021-1-1') }}>
          <ArrowNavigation />
        </SavingProviderMock>
      );

      await fireEvent.click(await screen.findByAltText('arrow-left'));

      expect(await screen.findByText('January')).toBeInTheDocument();
    });

    it('should decrease year when clicking arrow right and month is December', async () => {
      render(
        <SavingProviderMock initState={{ date: new Date('2050-1-1') }}>
          <ArrowNavigation />
        </SavingProviderMock>
      );

      await fireEvent.click(screen.getByAltText('arrow-left'));

      expect(await screen.findByText('2049')).toBeInTheDocument();
    });
  });
});
