export const WhiteButtonModal = ({ text, type = "button", ...props }) => (
  <button
    type={type}
    {...props}
    className="flex justify-center items-center w-[19.18rem] h-[2.8125rem] bg-[#FCFCFE] text-[#000000] rounded-[0.2rem] text-[1.125rem] border-[0.0625rem] border-black mx-auto cursor-pointer font-inter"
  >
    {text}
  </button>
);
