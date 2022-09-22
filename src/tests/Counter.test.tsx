import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Conter';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it('has a number and two buttons', () => {
    render(<Counter />);
    screen.getByText('0');
    screen.getByText('+1');
    screen.getByText('-1');
  });

  it('increases', () => {
    render(<Counter />);
    const number = screen.getByText('0');
    const button = screen.getByText('+1');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(number.textContent).toBe('3');
  });

  it('decreases', () => {
    render(<Counter />);
    const number = screen.getByText('0');
    const plusButton = screen.getByText('-1');

    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('-2'); // jest-dom 의 확장 matcher 사용
  });
});
