import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import {ViewPackageSize} from "../src/pages/ViewPackageSize";
import { renderWithRouter } from "./utilsTest";

describe("ViewPackageSize", () => {
  it("debería renderizar el logo de Eureka", () => {
    renderWithRouter(<ViewPackageSize />);
    const logo = screen.getByAltText("Logo Eureka");
    expect(logo).toBeInTheDocument();
  });

  it("debería mostrar el título principal", () => {
    renderWithRouter(<ViewPackageSize />);
    const title = screen.getByText(/¿Cómo es el paquete que deseas entregar?/i);
    expect(title).toBeInTheDocument();
  });

  it("debería renderizar los tamaños de paquete", () => {
    renderWithRouter(<ViewPackageSize />);
    const sizes = [
      "Paquete pequeño",
      "Paquete mediano",
      "Paquete grande",
      "Paquete extra grande"
    ];

    sizes.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
