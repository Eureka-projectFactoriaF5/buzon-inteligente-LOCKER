import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import { ExitButton } from "../components/buttons/ExitButton";

export const PendingPackages = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <section className="min-h-screen flex flex-col justify-center items-center gap-4
             bg-gradient-to-b font-bree from-[#4574FF] to-[#00174B] text-white ">

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


                <h1 className="text-center text-2xl md:text-3xl mb-6 text-white">Tus paquetes pendientes</h1>
                <Checkbox
                    packages={["Paquete 1", "Paquete 2", "Paquete 3"]}
                    checked={isChecked}
                    onCheck={() => setIsChecked(!isChecked)}
                />

                <button className="bg-white text-dark-blue py-4 px-8 rounded
                hover:scale-110 transition transform cursor-pointer">Abrir Locker</button>
            </section>
        </>
    );
}