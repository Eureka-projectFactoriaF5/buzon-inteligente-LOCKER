export const ButtonInsertCode = ({ text, action, type = "button" }) => (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#FCFCFE] text-[#00174B] w-[170px] h-[45px] rounded-[32px] text-[18px] border-[none] mx-auto cursor-pointer font-bree"
    >
      {text}
    </button>
  );