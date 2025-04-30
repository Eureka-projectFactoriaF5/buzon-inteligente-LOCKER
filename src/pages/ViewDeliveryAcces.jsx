import React from "react";
import { ExitButton } from "../components/buttons/ExitButton";
import { Keyboard } from "../components/keyboard/Keyboard";


export const ViewDeliveryAcces = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b font-bree from-[#4574FF] to-[#00174B] text-white relative ">
      <div className="flex justify-between items-center mb-8 w-full px-2">
        <div className="flex-shrink-0">
          <img
            src="/images/logosinfondoazul.png"
            alt="Logo Eureka"
            className="h-20 md:h-16"
          />
        </div>

        <Link to="/">
          <div className="scale-60 md:scale-70 mr-1">
            <ExitButton text="Salir" />
          </div>
        </Link>

      </div>

      <h1 className="text-center text-2xl md:text-3xl mb-6">
        Escribe Código de Entrega
      </h1>
      
    </div>
  );
}