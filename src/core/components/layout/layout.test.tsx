import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';

test('renders gentlemen word', () => {
    const getChildren = <section></section>;
    render(<Layout children={getChildren} />);
    const element = screen.getAllByText(/gentlemen/i);
    expect(element[0]).toBeInTheDocument();
});
