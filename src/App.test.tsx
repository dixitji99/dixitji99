import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders username', () => {
  render(<App />);
  const linkElement = screen.getByText('Ayush Dixit');
  expect(linkElement).toBeInTheDocument();
});
