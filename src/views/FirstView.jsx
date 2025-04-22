import React from "react";
import { Link } from "react-router-dom";
import '../../public/images/logosinfondoazul.png'
  
export default function FirstView() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#4574FF] to-[#00174B] text-white relative p-[1%]">
      <div className="flex justify-between items-center mb-8">
         <img src="../../public/images/logosinfondoazul.png" alt="Logo Eureka" className="h-10 md:h-20" />
      </div>  
      
      <div className="flex-grow flex flex-col items-center justify-center text-center p-[2%] ml-[-17%] mt-[-16%]">
        <h1 className="text-[200%] md:text-[200%] font-bree font-bold mb-10">
          ¡Bienvenido! ¿Qué deseas hacer hoy?
        </h1>

        <div className="flex flex-col md:flex-row gap-[4%] justify-center items-center ">
         
          {/* <Link to="/ViewUserAcces"> */}
            <div className="w-[22%]  bg-white text-blue-700 rounded-[0.4rem] shadow-lg flex flex-col items-center justify-center p-[2%] hover:scale-105 transition cursor-pointer">
              <img
                src="/images/RecogerPaqueteInicio.png"
                alt="Recoger Paquete"
                className="w-[80%]  object-contain py-[2%]"
              />
            </div>
          {/* </Link> */}

         
          {/* <Link to="/ViewDeliveryAcces"> */}
            <div className="w-[22%]  bg-white text-blue-700 rounded-[0.4rem] shadow-lg flex flex-col items-center justify-center p-[2%] hover:scale-105 transition cursor-pointer">
              <img
                src="/images/EntregarPaqueteInicio.svg"
                alt="Entregar Paquete"
                className="w-[80%] object-contain py-[2%] "
              />
            </div>
          {/* </Link> */}
        </div>

        <p className="mt-10 text-[1.5rem] text-white/80 font-bree">
        Gracias por confiar en Eureka Smart Locker
        </p>
      </div>
    </div>
  );
}
