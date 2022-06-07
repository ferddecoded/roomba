import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('pressing turn right button updates the direction emoji', () => {
  render(<App />);
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('👉');

  userEvent.click(screen.getByRole('button', { name: /Turn right/i }));
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('👇');

  userEvent.click(screen.getByRole('button', { name: /Turn right/i }));
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('👈');

  userEvent.click(screen.getByRole('button', { name: /Turn right/i }));
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('☝️');
});

test('pressing move forward button updates emoji to its next location', async () => {
  render(<App />);
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('👉');

  await waitFor(() => {
    userEvent.click(screen.getByRole('button', { name: /move forward/i }));
  });
  expect(screen.queryAllByTestId('cell')[0].textContent).toBe('');

  // this is the cell directly to the right of the first cell
  // column: 1, row: 0
  expect(screen.queryAllByTestId('cell')[10].textContent).toBe('👉');
});
