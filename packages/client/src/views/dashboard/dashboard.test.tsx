import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

jest.mock('../../services/casinoService', () => {
  const mockCasinoService = {
    startGame: jest.fn(),
    rollJackpot: jest.fn(() => Promise.resolve()),
    cashOut: jest.fn(),
  };
  return {
    CasinoService: jest.fn(() => mockCasinoService),
    startGame: jest.fn(), // Update the mock implementation of startGame
  };
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn({ currentBlocks: [0, 1, 2], credit: 100 })),
  useDispatch: () => mockDispatch,
}));

describe('Dashboard Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('should call casino service on component mount', () => {
    const { CasinoService } = require('../../services/casinoService');
    render(<Dashboard />);
    expect(CasinoService).toHaveBeenCalledTimes(1);
  });

  test('cashOut is called when cash out button is clicked', () => {
    const { CasinoService } = require('../../services/casinoService');
    render(<Dashboard />);
    fireEvent.click(screen.getByRole('button', { name: /cash out/i }));
    expect(CasinoService.mock.results[0].value.cashOut).toHaveBeenCalled();
  });

  test('renders the correct number of blocks', () => {
    render(<Dashboard />);
    expect(screen.getAllByTestId('block').length).toBe(3);
  });
});