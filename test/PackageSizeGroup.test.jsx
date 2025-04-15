import { render, screen } from '@testing-library/react';
import PackageSizeGroup from '../src/components/PackageSizeGroup';

describe('PackageSizeGroup Component', () => {
    it('renders without crashing', () => {
        render(<PackageSizeGroup />);
        const container = screen.getAllByAltText(/Paquete/)[0].closest('div');
        expect(container).toBeInTheDocument();
    });

    it('renders all PackageSizeCard components with correct props', () => {
        render(<PackageSizeGroup />);
        const sizes = ['S', 'M', 'L', 'XL'];
        const dimensions = [
            '165 mm x 215 mm x 85 mm',
            '215 mm x 265 mm x 85 mm',
            '435 mm x 375 mm x 85 mm',
            '640 mm x 765 mm x 85 mm',
        ];
        const labels = [
            'Paquete pequeño',
            'Paquete mediano',
            'Paquete grande',
            'Paquete extra grande',
        ];

        sizes.forEach((_, index) => {
            const card = screen.getByText(labels[index]);
            expect(card).toBeInTheDocument();
            expect(screen.getByText(dimensions[index])).toBeInTheDocument();
        });
    });
});