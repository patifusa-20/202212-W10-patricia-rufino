import React from 'react';
import { render, screen } from '@testing-library/react';
import { Controls } from './controls';
import { gentlemenData } from '../../../../core/model/gentlemen.data';

test('renders pointing word', () => {
    const totalSelected = gentlemenData;
    const selectAllSelectedGentlemen = jest.fn();
    render(
        <Controls
            totalSelected={totalSelected}
            selectAllSelectedGentlemen={selectAllSelectedGentlemen}
        />
    );
    const element = screen.getByText(/pointing/i);
    expect(element).toBeInTheDocument();
});
