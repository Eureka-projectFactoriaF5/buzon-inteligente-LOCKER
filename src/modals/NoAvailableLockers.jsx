import "../styles/styles.css";
import React, { useState } from "react";

export const NoAvailableLockers = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (                                
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center">
            <div id="modal-content" className="bg-[#BEC7FF] p-7 rounded shadow-md w-[40%] text-center">
                <p className="py-5 text-6xl">❌ </p>
                <h1 className="text-2xl font-bree mb-4">
                    Todos los lockers están ocupados
                </h1>
                <div id="modal-btns-inUseLocker" className="flex flex-row justify-center gap-2">
                    <button id="btn-choose-size" onClick={openModal} className="w-[36%] bg-[#FFFFFF] text-black py-2 px-4 rounded border font-bree text-center cursor-pointer mb-2">
                        CANCELAR ENTREGA
                    </button>
                </div>
                <h2 className="text-xm py-1">
                    *Contacta con el cliente para completar entrega alternativa*
                </h2>
            </div>
        </div>
    );
};