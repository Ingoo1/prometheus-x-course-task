import { render, screen } from '@testing-library/react';

import SignInPage from './pages/SignInPage';

test('Welcome to React Bookstore!', () => {
  render(<SignInPage />);
  const linkElement = screen.getByText(/Welcome to React Bookstore!/i);
  expect(linkElement).toBeInTheDocument();
});
