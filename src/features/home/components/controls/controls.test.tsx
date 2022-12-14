import React from 'react';
import { render, screen } from '@testing-library/react';
import { Controls } from './controls';
import { gentlemenData } from '../../../../core/mocks/gentlemen.data';

test('renders pointing word', () => {
    const totalSelected = gentlemenData;
    const setSelectAll = jest.fn();
    render(
        <Controls totalSelected={totalSelected} setSelectAll={setSelectAll} />
    );
    const linkElement = screen.getByText(/pointing/i);
    expect(linkElement).toBeInTheDocument();
});
