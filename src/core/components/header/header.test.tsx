import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('renders pointing word', () => {
    render(<Header />);
    const linkElement = screen.getAllByText(/pointing/i);
    expect(linkElement[0]).toBeInTheDocument();
});
