import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gentlemen word', () => {
    render(<App />);
    const element = screen.getAllByText(/gentlemen/i);
    expect(element[0]).toBeInTheDocument();
});
