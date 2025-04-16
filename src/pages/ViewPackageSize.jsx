import React from "react";
import PackageSizeGroup from "../components/PackageSizeGroup";
{/*import ExitButton from "../components/ExitButton";*/}
{/*import WhiteButton from "../components/WhiteButton";*/}

const ViewPackageSize = () => {
    return (
        <div className="min-h-screen flex flex-col font-bree bg-gradient-to-b from-[#4574ff] to-[#001748] text-white relative px-8 py-8 text-lg">

            <div className="flex justify-between items-center mb-8">
                <img src="/images/logosinfondoazul.png" alt="Logo Eureka" className="h-10 md:h-20" />
                 
                 <ExitButton/>
            </div>

            <h1 className="text-center text-2xl md:text-3xl">
                ¿Cómo es el paquete que deseas entregar?
            </h1>

            <PackageSizeGroup /> 
            
            <WhiteButton text="Abrir Locker" />

        </div>
    );
};

export default ViewPackageSize;



