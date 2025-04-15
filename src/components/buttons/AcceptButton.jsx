import { WhiteButton } from "./WhiteButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorCodeModal } from "../modals/ErrorCodeModal";
import { ExitModalButton } from "./ExitModalButton";

export const AcceptButton = ({ inputCode, text = "Aceptar", redirectPath = "/vistatamaños", ...props }) => {
    //const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        const fakeCorrectCode = "123456"; // codigo fakeado
        if (inputCode === fakeCorrectCode) {
            navigate(redirectPath);
        } else {
            setShowModal(true);
        }
    };
    return (
        <>
            <WhiteButton text={text} onClick={handleClick} {...props} />
            {showModal && (
                <ErrorCodeModal onClose={() => setShowModal(false)}>
                    <p className="py-5 text-6xl">❌ </p>
                    <div className="text-center px-4">
                        <p className="text-[1.75rem] font-medium leading-snug mb-10">
                            Código de entrega incorrecto
                        </p>
                        <ExitModalButton className="text-center text-sm" text="Cerrar" onClick={() => setShowModal(false)} />
                        </div>
                </ErrorCodeModal>
            )}
        </>
    );
};