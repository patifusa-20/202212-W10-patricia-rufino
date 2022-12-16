import React from 'react';
import { render, screen } from '@testing-library/react';
import { Info } from './info';
import { gentlemenData } from '../../../../core/model/gentlemen.data';

test('renders Osbourne word', () => {
    const item = gentlemenData[0];
    render(<Info item={item} />);
    const linkElement = screen.getByAltText(/osbourne/i);
    expect(linkElement).toBeInTheDocument();
});
