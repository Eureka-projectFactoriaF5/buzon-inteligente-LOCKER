import React from "react";
import PackageSizeGroup from "../components/PackageSizeGroup";

const ViewPackageSize = () => {
    return (
        <div className="min-h-screen flex flex-col font-bree bg-gradient-to-b from-[#4574ff] to-[#001748] text-white relative px-8 py-8 text-lg">

            <div className="flex justify-between items-center px-6 mb-6">
                <img alt="Logo Eureka" className="h-10 md:h-12" />
                {/* Placeholder ExitButton */}
            </div>

            <h1 className="text-center text-2xl md:text-3xl">
                ¿Cómo es el paquete que deseas entregar?
            </h1>

            <PackageSizeGroup /> 

            {/* Placeholder <AbrirLocker/> */}
        </div>
    );
};

export default ViewPackageSize;



