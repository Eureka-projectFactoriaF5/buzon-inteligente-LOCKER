export const InsertCodeButton = ({ text, action, type = "button" }) => (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#fcfcfe] text-[#00174b] w-[28.938rem] h-[7rem] rounded-[2rem] text-[3.125rem] border-[none] mx-auto cursor-pointer font-bree"
    >
      {text}
    </button>
  );