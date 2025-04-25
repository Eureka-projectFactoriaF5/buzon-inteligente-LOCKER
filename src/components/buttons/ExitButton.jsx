import { useNavigate } from "react-router-dom";

export const ExitButton = ({ text, type = "button", ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/FirstView"); 
  };

  return (
    <button
      type={type}
      {...props}
      onClick={handleClick}
      className="flex justify-center items-center w-[11.375rem] h-[4.063rem] bg-[#00328C] text-[#FFFFFF] rounded-[0.625rem] text-[2.625rem] border-none mx-auto cursor-pointer font-bree"
    >
      {text}
    </button>
  );
};