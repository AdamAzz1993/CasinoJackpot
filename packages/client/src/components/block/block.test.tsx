import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Block from './block';
import { eBlockType } from '@enums/eBlockType';

describe('<Block />', () => {
  test('it should display spinner initially', () => {
    render(<Block key={1} index={1} value={eBlockType.Cherry}/>);
    expect(screen.getByText(eBlockType.Spinner)).toBeInTheDocument();
  });
});