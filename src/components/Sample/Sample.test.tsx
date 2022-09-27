import React from 'react';
import { render, screen } from '@testing-library/react';
import Sample from './Sample';

test('renders', () => {
  render(<Sample />);
  const linkElement = screen.getByText(/HELLO WORLD/i);
  expect(linkElement).toBeInTheDocument();
});
