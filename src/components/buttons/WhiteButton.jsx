export const WhiteButton = ({ text, type = "button", disabled = false, ...props}) => (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className="flex justify-center items-center w-[15%] h-[5.5%] bg-[#FCFCFE] text-[#00174B] rounded-[0.625rem] text-[1.125rem] border-none mx-auto cursor-pointer font-bree"
    >
      {text}
    </button>
  );