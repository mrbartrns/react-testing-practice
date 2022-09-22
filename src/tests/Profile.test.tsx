import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    render(<Profile username="Ben" name="BenName" />);
    screen.getByText('Ben');
    screen.getByText('(BenName)');
  });
});
