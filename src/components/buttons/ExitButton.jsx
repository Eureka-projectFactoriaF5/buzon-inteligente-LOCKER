export const ExitButton = ({ text, type = "button", ...props}) => (
    <button
      type={type}
      {...props}
      className="flex justify-center items-center w-[11.375rem] h-[4.063rem] bg-[#00328C] text-[#FFFFFF] rounded-[0.625rem] text-[2.625rem] border-none mx-auto cursor-pointer font-bree">
      {text}
    </button>
  );