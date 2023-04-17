import { render, screen } from '@testing-library/react';
import App from './App';

test('Check Welcome Message', () => {
  render(<App />);
  const linkElement = screen.getByText('Let us talk movies');
  expect(linkElement).toBeInTheDocument();
});
