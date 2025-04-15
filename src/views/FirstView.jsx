import React from "react";
import { Link } from "react-router-dom";

export default function FirstView() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#4574FF] to-[#00174B] text-white relative">
      <div className="flex justify-between items-center mb-8">
         <img src="/public/IMGS Proyecto/logosinfondoazul.png" alt="Logo Eureka" className="h-10 md:h-20" />
      </div>  
      
      <div className="flex-grow flex flex-col items-center justify-center text-center px-12">
        <h1 className="text-3xl md:text-4xl font-bree font-bold mb-10">
          ¡Bienvenido! ¿Qué deseas hacer hoy?
        </h1>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
         
          {/* <Link to="/ViewUserAcces"> */}
            <div className="w-90 h-90 bg-white text-blue-700 rounded-xl shadow-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition cursor-pointer">
              <img
                src="/IMGS Proyecto/RecogerPaqueteInicio.png"
                alt="Recoger Paquete"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          {/* </Link> */}

         
          {/* <Link to="/ViewDeliveryAcces"> */}
            <div className="w-90 h-90 bg-white text-blue-700 rounded-xl shadow-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition cursor-pointer">
              <img
                src="/IMGS Proyecto/EntregarPaqueteInicio.svg"
                alt="Entregar Paquete"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          {/* </Link> */}
        </div>

        <p className="mt-10 text-[1.5rem] text-white/80 font-bree">
          Gestión provista por Eureka Smart Locker
        </p>
      </div>
    </div>
  );
}
