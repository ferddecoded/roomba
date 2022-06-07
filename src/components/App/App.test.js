import { render, screen } from '@testing-library/react';
import App from './';

test('renders App grid', () => {
  render(<App />);
  expect(screen.queryAllByTestId('cell').length).toBe(100);
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('👉');
  expect(
    screen.getByRole('button', { name: /Turn right/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Move forward/i }),
  ).toBeInTheDocument();
});
