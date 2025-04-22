export const WhiteButtonWish = ({ text, type = "button", ...props }) => (
    <button
      type={type}
      {...props}
      className="flex justify-center items-center w-1/4 max-w-[30rem] bg-[#FCFCFE] text-[#00174B] rounded-[0.376rem] text-[1.625rem] border-none mx-auto cursor-pointer font-bree"
    >
      {text}
    </button>
  );