import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wallet from './wallet';

describe('<wallet />', () => {
  test('it should mount', () => {
    render(<Wallet credit={0} />);

    const wallet = screen.getByTestId('wallet');

    expect(wallet).toBeInTheDocument();
  });
});