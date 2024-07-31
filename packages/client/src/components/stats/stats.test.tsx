import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stats from './stats';

describe('<stats />', () => {
  test('it should mount', () => {
    render(<Stats credit={0} />);

    const stats = screen.getByTestId('stats');

    expect(stats).toBeInTheDocument();
  });
});