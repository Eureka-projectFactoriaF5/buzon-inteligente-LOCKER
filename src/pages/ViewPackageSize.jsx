import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PackageSizeGroup } from "../components/PackageSizeGroup";
import { ExitButton } from "../components/buttons/ExitButton";
import { WhiteButton } from "../components/buttons/WhiteButton";

export const ViewPackageSize = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleOpenLocker = async () => {
    setErrorMessage(null);

    if (!selectedSize) {
      setErrorMessage("Selecciona un tamaño primero");
      return;
    }

    // TODO: Aquí falta el endpoint que abre la puerta
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
      
      navigate("/src/pages/ViewDeliveryMan.jsx", {
        state: { selectedSize },
      });

    } catch (error) {
      console.error("Error al abrir el locker:", error);
      setErrorMessage("No se pudo abrir el locker. Intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-bree bg-gradient-to-b from-[#4574ff] to-[#001748] text-white relative px-8 py-8 text-lg">

      {/* 🔔 Mensaje de error si existe */}
      {errorMessage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg text-center z-50">
          {errorMessage}
        </div>
      )}

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

      <h1 className="text-center text-2xl md:text-3xl mb-6">
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







