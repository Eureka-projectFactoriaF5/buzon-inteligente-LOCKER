import "../styles/styles.css";
import React, { useState } from "react";
import { WhiteButtonModal } from "../components/buttons/WhiteButtonModal"


export const AllLockersFull = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (                                
        <div id="modal-container" className="fixed inset-0 flex items-center justify-center">
            <div id="modal-content" className="bg-[#BEC7FF] p-7 rounded shadow-md w-[40%] text-center">
                <p className="py-5 text-5xl">❌ </p>
                <div id="modal-btns-inUseLocker" className="flex flex-row justify-center gap-2">
                <WhiteButtonModal />  
                </div>
                <h2 className="text-xm py-1">
                    *Contacta con el cliente para completar entrega alternativa*
                </h2>
            </div>
        </div>
    );
};