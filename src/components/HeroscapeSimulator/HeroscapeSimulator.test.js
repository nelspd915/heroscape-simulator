import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroscapeSimulator from './HeroscapeSimulator';

describe('<HeroscapeSimulator />', () => {
  test('it should mount', () => {
    render(<HeroscapeSimulator />);
    
    const heroscapeSimulator = screen.getByTestId('HeroscapeSimulator');

    expect(heroscapeSimulator).toBeInTheDocument();
  });
});