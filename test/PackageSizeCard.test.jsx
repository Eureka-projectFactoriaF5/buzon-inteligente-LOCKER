import { render, screen } from '@testing-library/react';
import { PackageSizeCard } from '../src/components/PackageSizeCard';
import { expect, it, describe } from 'vitest';

describe('PackageSizeCard', () => {
    const mockProps = {
        size:"S",
        dimensions:"165 mm x 215 mm x 85 mm",
        label:"Paquete pequeño",
        sizeClass:"w-20 h-20"
    };

    it('renderiza el componente con las props correctas', () => {
        render(<PackageSizeCard {...mockProps} />);
        const img = screen.getByAltText(`Paquete ${mockProps.label}`);

        expect(screen.getByText(mockProps.size)).toBeInTheDocument();
        expect(screen.getByText(mockProps.dimensions)).toBeInTheDocument();
        expect(screen.getByText(mockProps.label)).toBeInTheDocument();

        expect(img).toBeInTheDocument();
        expect(img).toHaveClass(mockProps.sizeClass);
    });

    it('muestra los elementos correctos', () => {
        render(<PackageSizeCard {...mockProps} />);

        const card = screen.getByTestId('package-size-card');
        const size = screen.getByText(mockProps.size);
        const dimensions = screen.getByText(mockProps.dimensions);
        const label = screen.getByText(mockProps.label);
        const img = screen.getByAltText(`Paquete ${mockProps.label}`);

        expect(card).toBeInTheDocument();
        expect(size).toBeInTheDocument();
        expect(dimensions).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
});