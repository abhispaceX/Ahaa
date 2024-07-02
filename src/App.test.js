import { getAllByRole, getByAltText, getByText, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import ContactUs from './components/contact';
import App from './App';

test('renders learn react link', () => {
  render(<ContactUs />);
  const buttons= screen.getAllByRole('button')

  buttons.forEach(button => {
    expect(button).toBeInTheDocument()
  });


});
