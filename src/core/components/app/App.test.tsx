import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gentlemen word', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/gentlemen/i);
    expect(linkElement[0]).toBeInTheDocument();
});
