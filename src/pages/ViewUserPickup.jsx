import React, { useState, useEffect } from "react";
import { ExitButton } from "../components/buttons/ExitButton";
import { WhiteButtonWish } from "../components/buttons/WhiteButtonWish";
import { ReopenDoor } from "../utils/ReopenDoor";

export const ViewUserPickup = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleReopenDoor = () => {
    ReopenDoor(setMessage, "Reabrir puerta");
  };


  return (
    <div className="min-h-screen flex flex-col font-bree bg-gradient-to-b from-[#4574ff] to-[#001748] text-white relative px-8 py-8 text-lg">
      
      
      {message && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg text-center z-50">
          {message}
        </div>
      )}

      <div className="flex justify-between items-center w-full px-2 mb-30">
        <img
          src="/images/logosinfondoazul.png"
          alt="Logo Eureka"
          className="h-20 md:h-16"
        />
        <div className="scale-60 md:scale-70 mr-1">
        <Link to="/">
          <div className="scale-60 md:scale-70 mr-1">
            <ExitButton text="Salir" />
          </div>
        </Link>
        </div>
      </div>

      <h1 className="text-center text-2xl md:text-3xl mb-10">
        ¿Qué deseas hacer ahora?
      </h1>

      <div className="flex flex-col space-y-10 items-center justify-center">
        <WhiteButtonWish text="✅Confirmar Recogida" />
        <WhiteButtonWish text="🔁Reabrir Puerta" onClick={handleReopenDoor} />
        <WhiteButtonWish text="⏳Posponer Recogida" />
      </div>
    </div>
  );
};
