import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CounterComponent from './components/CounterComponent';

const mokedSetCount = jest.fn();

describe('CounterComponent', () => {
  it('counter displays correct initial value', async () => {
    render(<CounterComponent count={1} />);
    const countValue = Number(screen.getByTestId('count').value);
    expect(countValue).toEqual(1);
  });

  it('should increment when the up button is clicked', async () => {
    render(<CounterComponent count={5} setCount={mokedSetCount} />);
    const upButton = screen.getByRole('button', { name: '▲' });
    const countInput = screen.getByTestId('count');

    fireEvent.click(upButton);

    await waitFor(() => {
      const countValue = Number(countInput.value);
      expect(countValue).toBe(6);
    });
  });
});
