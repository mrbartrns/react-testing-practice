import DelayedToggle from '../components/DelayedToggle';
import { screen, render, fireEvent } from '@testing-library/react';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    render(<DelayedToggle />);

    const button = screen.getByText('토글');

    fireEvent.click(button);

    await screen.findByText('토글');
  });
});
