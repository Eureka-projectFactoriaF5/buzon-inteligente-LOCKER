export const WhiteButton = ({ text, type = "button", ...props}) => (
    <button
      type={type}
      {...props}
      className="flex justify-center items-center w-[10.625rem] h-[2.8125rem] bg-[#FCFCFE] text-[#00174B] rounded-[0.625rem] text-[1.125rem] border-none mx-auto cursor-pointer font-bree"
    >
      {text}
    </button>
  );