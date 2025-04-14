export const ExitModalButton = ({ text, type = "button", ...props }) => (
    <button
      type={type}
      {...props}
      className="flex justify-center items-center w-[19.18rem] h-[2.8125rem] bg-[#00174b] text-[#FFFFFF] rounded-[0.2rem] text-[1.125rem] border-[0.0625rem] border-[#00174b] mx-auto cursor-pointer font-inter"
    >
      {text}
    </button>
  );