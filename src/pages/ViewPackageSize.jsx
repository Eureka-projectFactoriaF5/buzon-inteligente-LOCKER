import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PackageSizeGroup } from "../components/PackageSizeGroup";
import { ExitButton } from "../components/buttons/ExitButton";
import { WhiteButton } from "../components/buttons/WhiteButton";

export const ViewPackageSize = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const handleOpenLocker = async () => {
    if (!selectedSize) {
      alert("Selecciona un tamaño primero");
      return;
    }

    try {
      const response = await fetch("/api/abrir-locker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ size: selectedSize }),
      });

      if (!response.ok) {
        throw new Error("Error al abrir el locker");
      }

      
      navigate({/*"/locker/vista-entrega-repartidor"*/}, { state: { selectedSize } });

    } catch (error) {
      console.error("Error al abrir el locker:", error);
      alert("No se pudo abrir el locker. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-bree bg-gradient-to-b from-[#4574ff] to-[#001748] text-white relative px-8 py-8 text-lg">

      <div className="flex justify-between items-center mb-8 w-full px-2">
        <div className="flex-shrink-0">
          <img
            src="/images/logosinfondoazul.png"
            alt="Logo Eureka"
            className="h-20 md:h-16"
          />
        </div>

        <div className="scale-60 md:scale-70 mr-1">
          <ExitButton text="Salir" />
        </div>
      </div>

      <h1 className="text-center text-2xl md:text-3xl">
        ¿Cómo es el paquete que deseas entregar?
      </h1>

      <PackageSizeGroup
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      <WhiteButton
        text="Abrir Locker"
        onClick={handleOpenLocker}
        disabled={!selectedSize}
      />
    </div>
  );
};





