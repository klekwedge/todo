import { render, fireEvent } from '@testing-library/react';
import ToggleTheme from './ToggleTheme';

test('renders ToggleTheme component with initial light theme', () => {
  const { getByLabelText } = render(<ToggleTheme />);
  const toggleButton = getByLabelText('');

  expect(toggleButton).toBeInTheDocument();
});

test('toggles theme when button is clicked', () => {
  const { getByLabelText } = render(<ToggleTheme />);
  const toggleButton = getByLabelText('');
  const {body} = document;

  fireEvent.click(toggleButton);

  expect(body.classList.contains('dark')).toBeTruthy();

  fireEvent.click(toggleButton);

  expect(body.classList.contains('dark')).toBeFalsy();
});
