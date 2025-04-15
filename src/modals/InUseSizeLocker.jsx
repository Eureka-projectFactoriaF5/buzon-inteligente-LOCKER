import "../styles/styles.css";
import React, { useState, useEffect } from "react";

export const InUseSizeLocker = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center">
            <div id="modal-content" className="bg-[#BEC7FF] p-7 rounded shadow-md w-[40%] text-center">
                <p className="py-5 text-6xl">❌ </p>
                <h1 className="text-2xl font-bree mb-6">
                    Los lockers de ese tamaño están ocupados
                </h1>
                <div id="modal-btns-inUseLocker" className="flex flex-row justify-center gap-2">
                    <button id="btn-choose-size" onClick={openModal} className="w-[36%] bg-[#FFFFFF] text-black py-2 px-4 rounded border font-bree text-center cursor-pointer">
                        ESCOGER TAMAÑO
                    </button>
                    <button id="btn-exit" onClick={closeModal} className="w-[36%] bg-[#00174B] text-white py-2 px-4 rounded border  hover:opacity-96 font-bree text-center text-sm sm:text-base cursor-pointer">
                        SALIR
                    </button>
                </div>
            </div>
        </div>
    );
};