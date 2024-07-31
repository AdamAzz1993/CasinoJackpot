import React from 'react';
import '@testing-library/jest-dom';
import RollerButton from './rollerButton';
import { render, screen } from '@testing-library/react';

describe('<roller-button />', () => {
  test('it should mount', () => {
    render(<RollerButton rollJackpot={() => console.log('rollJackpot')}  />);

    const rollerButtonElement = screen.getByTestId('roller');

    expect(rollerButtonElement).toBeInTheDocument();
  });
});