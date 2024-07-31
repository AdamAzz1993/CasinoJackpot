import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CashOutButton from './cashOutButton';

describe('<cashOutButton />', () => {
  test('it should mount', () => {
    render(<CashOutButton cashOut={() => {}} />);

    const cashOutButton = screen.getByTestId('cashOutButton');

    expect(cashOutButton).toBeInTheDocument();
  });
});