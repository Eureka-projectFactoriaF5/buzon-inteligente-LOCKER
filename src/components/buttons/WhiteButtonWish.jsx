export const WhiteButtonWish = ({ text, type = "button", ...props }) => (
  <button
    type={type}
    {...props}
    className="flex justify-center items-center 
               w-4/5 xl:w-2/4 
               bg-[#FCFCFE] text-[#00174B] 
               rounded-[0.376rem] 
               text-[1.625rem] xl:text-[2rem] 
               py-2 xl:py-4 
               border-none mx-auto 
               cursor-pointer font-bree"
  >
    {text}
  </button>
);

