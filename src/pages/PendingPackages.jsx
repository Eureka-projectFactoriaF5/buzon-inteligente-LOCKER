import React, { useState } from "react";
import Checkbox from "../components/Checkbox";

const PendingPackages = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <section className="font-bree min-h-screen bg-gradient-to-b from-light-blue to-dark-blue 
            flex flex-col items-center justify-center space-y-10 p-10">
                <h1 className="text-5xl text-white">Tus paquetes pendientes</h1>
                <Checkbox
                    packages={["Paquete 1", "Paquete 2", "Paquete 3"]}
                    checked={isChecked}
                    onCheck={() => setIsChecked(!isChecked)}
                />

                <button className="bg-white text-dark-blue py-4 px-8 rounded
                hover:scale-110 transition transform">Abrid Locker</button>
            </section>
        </>
    );
}
export default PendingPackages;