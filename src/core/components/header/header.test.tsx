import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('renders pointing word', () => {
    render(<Header />);
    const element = screen.getAllByText(/pointing/i);
    expect(element[0]).toBeInTheDocument();
});
