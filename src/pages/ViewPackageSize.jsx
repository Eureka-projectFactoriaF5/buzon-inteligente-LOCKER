import React, { useState } from "react";
import { ExitButton } from "../components/buttons/ExitButton";
import { WhiteButton } from "../components/buttons/WhiteButton";
import { InUseSizeLocker } from "../components/modals/InUseSizeLocker";
import { PackageSizeGroup } from "../components/PackageSizeGroup";


export const ViewPackageSize = () => {
    const [isErrorModalOpen, setErrormodalOpen] = useState(false);
    const handleSelectSize = (size) => {
        const available = {
            little: true,
            medium: false,
            big: true,
            jumbo: true
        };
        if (!available[size]) {
            setErrormodalOpen(true);
        }
    };


    return (
        <div className="min-h-screen flex flex-col font-bree bg-gradient-to-b from-[#4574ff] to-[#001748] text-white relative px-8 py-8 text-lg">
            <div className="flex justify-between items-center mb-8 w-full px-2">
                <div className="flex-shrink-0">
                    <img
                        src="/images/logosinfondoazul.png"
                        alt="Logo Eureka"
                        className="h-20 md:h-16" />
                </div>
                <div className="scale-60 md:scale-70 mr-1">
                    <ExitButton text="Salir" />
                </div>
            </div>
            <h1 className="text-center text-2xl md:text-3xl">
                ¿Cómo es el paquete que deseas entregar?
            </h1>
            <div className="flex justify-between items-center mb-8">
                <img src="/images/logosinfondoazul.png" alt="Logo Eureka" className="h-10 md:h-20" />
                <ExitButton />
            </div>
            <PackageSizeGroup onSelectSize={handleSelectSize} />
            <WhiteButton text="Abrir Locker" />
            <InUseSizeLocker isOpen={isErrorModalOpen} onClose={() => setErrormodalOpen(false)} />
        </div>
    );
};




