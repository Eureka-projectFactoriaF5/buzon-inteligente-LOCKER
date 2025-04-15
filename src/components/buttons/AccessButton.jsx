import { WhiteButton } from "./WhiteButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorCodeModal } from "../modals/ErrorCodeModal";
export const AccessButton = ({
  inputCode,
  text = "Acceder",
  redirectPath = "/vistapendientes",
  ...props
}) => {
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
          <div className="text-center px-4 font-bree">
            <p className="text-[1.68rem] font-medium leading-snug">
              Credencial de acceso incorrecta ❌
              <br />
              Introduce la credencial de nuevo
            </p>
          </div>
        </ErrorCodeModal>
      )}
    </>
  );
};
