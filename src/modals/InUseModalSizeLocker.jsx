import "../styles/styles.css";
import React, { useState, useEffect } from "react";

export const InUseModalSizeLocker = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div id="modal-inUseLocker" className="fixed inset-0 flex items-center justify-center sm:px-6 lg:px-20">
            <div id="modal-container-inUseLocker" className="bg-[#BEC7FF] p-8 rounded shadow-md w-[40%] text-center">
                <img id="imagen-error" src="/error.png" alt="Error" className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4"/>
                <h1 id="tittle-modal" className="text-base sm:text-xl font-semibold mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
                    Los lockers de ese tamaño están ocupados
                </h1>
                <div id="button-hoose-size" className="flex flex-col sm:flex-row justify-center gap-4">
                    <button id="choose-size-button" onClick={openModal} className="w-[35%] bg-[#FFFFFF] text-black py-2 px-4 rounded border hover:opacity-90 transition font-bree text-center text-sm sm:text-base cursor-pointer">
                        ESCOGER TAMAÑO
                    </button>
                    <button id="botton-exit" onClick={closeModal} className="w-[35%] bg-[#00174B] text-white py-2 px-4 rounded border hover:opacity-90 transition font-bree text-center text-sm sm:text-base cursor-pointer">
                        SALIR
                    </button>
                </div>
            </div>
        </div>
    );
};











