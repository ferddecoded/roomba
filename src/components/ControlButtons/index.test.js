import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ControlButtons } from './';

describe('<ControlButtons />', () => {
  const MockControlButtons = (customProps) => {
    const defaultProps = {
      updateDirection: jest.fn(),
      moveForward: jest.fn(),
    };

    return <ControlButtons {...defaultProps} {...customProps} />;
  };
  it('renders correctly', () => {
    render(<MockControlButtons />);
    expect(
      screen.getByRole('button', { name: /Turn right/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Move forward/i }),
    ).toBeInTheDocument();
  });

  it('calls updateDirection callback when turn right button is clicked', () => {
    const mockUpdateDirection = jest.fn();
    render(<MockControlButtons updateDirection={mockUpdateDirection} />);
    userEvent.click(screen.getByRole('button', { name: /Turn right/i }));
    expect(mockUpdateDirection).toHaveBeenCalled();
  });
  it('calls moveForward callback when turn move forward button is clicked', () => {
    const mockMoveForward = jest.fn();
    render(<MockControlButtons moveForward={mockMoveForward} />);
    userEvent.click(screen.getByRole('button', { name: /Move forward/i }));
    expect(mockMoveForward).toHaveBeenCalled();
  });
});
