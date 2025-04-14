export const WhiteButtonWish = ({ text, type = "button", ...props }) => (
    <button
      type={type}
      {...props}
      className="flex justify-center items-center w-3/4 max-w-[30rem] h-[4rem] bg-[#FCFCFE] text-[#00174B] rounded-[0.375rem] text-[1.125rem] border-none mx-auto cursor-pointer font-bree shadow-md hover:shadow-lg transition-all"
    >
      {text}
    </button>
  );