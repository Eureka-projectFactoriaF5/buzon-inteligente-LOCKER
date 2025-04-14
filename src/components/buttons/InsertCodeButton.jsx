export const InsertCodeButton = ({ text, type = "button", ...props}) => (
  <button
    type={type}
    {...props}
    className="flex justify-center items-center h-[7.125rem] bg-[##FCFCFE] text-[#00174B] rounded-[0.625rem] text-[3rem] border-none #00000040 mx-auto cursor-pointer font-bree"
  >
    {text}
  </button>
);