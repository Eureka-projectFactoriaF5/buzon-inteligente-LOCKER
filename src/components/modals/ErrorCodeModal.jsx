export const ErrorCodeModal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="relative bg-[#BEC7FF] w-[90vw] max-w-[32rem] min-h-[15rem]
                   rounded-[0.5rem] border-none shadow-lg px-[2rem] py-[2.5rem] text-center flex flex-col justify-center items-center">
            {children}
            </div>
        </div>
    );
};