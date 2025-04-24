import "../styles/styles.css";
import React, { useState } from "react";
import { ExitButton } from "../buttons/ExitButton"; // ajusta el path si está en otra carpeta
import { WhiteButtonModal } from "../buttons/WhiteButtonModal"

export const InUseSizeLocker = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center font-bree">
            <div id="modal-content" className="bg-[#BEC7FF] p-7 rounded shadow-md w-[60%] text-center">
                <p className="py-5 text-6xl">❌ </p>
                <h1 className="text-xl font-bree mb-6">
                    Los lockers de ese tamaño están ocupados
                </h1>
                <div id="modal-btns-inUseLocker" className="flex flex-row justify-center gap-2">
                    <WhiteButtonModal text="ESCOGER TAMAÑO" /> 
                    <ExitButton text="SALIR" />
                </div>
            </div>
        </div>
    );
};