import { ExitModalButton } from "../buttons/ExitModalButton";

export const DeliveryReceiptModal = ({ onClose,}) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#BEC7FF] w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-lg p-6 sm:p-8 font-bree flex flex-col items-center justify-center text-[#00174B]">

        <div className="text-3xl sm:text-4xl mb-4">⭐</div>
        <div className="text-base font-medium space-y-1 mb-6">
        <h2 className="text-lg sm:text-xl  mb-6 ">
          Justificante de entrega
        </h2>
          <p><span >Código de entrega:</span></p>
          <p><span >Nombre:</span></p>
          <p><span >Apellidos:</span></p>
          <p><span >DNI:</span></p>
          <p><span >Fecha:</span></p>
        </div>

        <ExitModalButton
          text="CERRAR"
          onClick={onClose}
          //FALTA LA RUTA AL MENU PRINCIPAL UNA VEZ ESTE HECHA ESA VISTA
          
        />
      </div>
    </div>
  );
};
