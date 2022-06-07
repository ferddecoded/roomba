import { render, screen } from '@testing-library/react';
import { Cell } from './';

describe('<Cell />', () => {
  const MockCell = (customProps) => {
    const defaultProps = {
      position: { column: 0, row: 0 },
      columnIndex: 0,
      rowIndex: 0,
      direction: '👉',
    };

    return <Cell {...defaultProps} {...customProps} />;
  };
  it('renders direction emoji', () => {
    render(<MockCell />);
    expect(screen.getByTestId('cell').textContent).toBe('👉');
  });
  it('renders empty state', () => {
    render(<MockCell rowIndex={1} />);
    expect(screen.getByTestId('cell').textContent).toBe('');
  });
});
