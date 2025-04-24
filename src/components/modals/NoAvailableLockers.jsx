import "../styles/styles.css";
import React, { useState } from "react";
import { WhiteButtonModal } from "../buttons/WhiteButtonModal"

export const NoAvailableLockers = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (                                
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center font-bree">
            <div id="modal-content" className="bg-[#BEC7FF] p-7 rounded shadow-md w-[60%] text-center">
                <p className="py-5 text-6xl">❌ </p>
                <h1 className="text-2xl font-bree mb-4">
                    Todos los lockers están ocupados
                </h1>
                <div id="modal-btns-inUseLocker" className="flex flex-row justify-center gap-2 ">
                    <WhiteButtonModal text="CANCELAR ENTREGA" />     
                </div>
                <h2 className="text-xm py-1">
                    *Contacta con el cliente para completar entrega alternativa*
                </h2>
            </div>
        </div>
    );
};