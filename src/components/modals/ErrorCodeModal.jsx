export const ErrorCodeModal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="relative bg-[#BEC7FF] w-[90vw] max-w-[32rem] min-h-[15rem]
                   rounded-[1rem] border-none shadow-lg px-[2rem] py-[2.5rem] text-center flex flex-col justify-center items-center">
            <button
                className="bg-[#00174B] absolute px-[0.70rem] top-[1rem] right-[1rem] text-[white] rounded-[1.25rem] text-[1rem] mx-auto cursor-pointer"
                onClick={onClose}
            > Cerrar
            </button>
            {children}
            </div>
        </div>
    );
};