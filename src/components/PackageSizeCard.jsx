export const PackageSizeCard = ({ size, dimensions, label, sizeClass, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(size)}
      className={`bg-white rounded-xl w-58 h-88 p-4 flex flex-col justify-between items-center text-center 
        hover:scale-105 transition-transform cursor-pointer 
        ${isSelected ? 'ring-200 ring-blue-500' : 'shadow-md'}
      `}
      style={{ boxShadow: isSelected ? '0 0 0 3px #60a5fa' : 'inset -8px 0 10px -6px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/IconoPaquete.svg"
          alt={`Paquete ${label}`}
          className={`${sizeClass}`}
        />
      </div>
      <div className="font-bree">
        <h3 className="font-bold text-2xl text-black -mt-10">{size}</h3>
        <p className="text-xs text-black">{dimensions}</p>
        <p className="font-medium mt-1 text-black">{label}</p>
      </div>
    </div>
  );
};


  
  