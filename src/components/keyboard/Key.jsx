import React from "react";

export  const Key = ({ type, value, onPress, isActive }) => {
    const baseClasses = `
      justify w-full h-[85%] m-[1%] justify-center flex-col
      bg-white rounded-[8%] text-[#0c1991] text-2xl font-bold
      cursor-pointer font-[bree-serif]
      transition-colors duration-150 ease-in-out
      hover:bg-[#5ab9ec]
    `;

    const dynamicClasses = {
        3: 'w-[300%]',
        4: {
            first: 'w-[280%]',
            last: 'w-[280%]'
        },
        5: {
            first: 'w-[200%] h-[100%] mt-[3%]',
            second: 'w-[300%] h-[100%] mt-[3%]',
            last: 'w-[150%] h-[100%] mt-[3%]'
        }
    };

    const getDynamicClasses = () => {
        if (type === 'special') {
            const row = value.row;
            const position = value.position;

            if (row === 3) return 'w-[300%]';
            if (row === 4) {
                return position === 'first' ? 'w-[280%]' : 'w-[280%]';
            }
            if (row === 5) {
                const widthClass = position === 'second' ? 'w-[300%]' : 'w-[200%]';
                return `${widthClass} mt-[3%]`;
            }
        }
        return '';
    };

    return (
        <button
            className={`${baseClasses} ${getDynamicClasses()} ${isActive ? 'bg-blue-500' : ''}`}
            onClick={onPress}
        >
            {value}
        </button>
    );
};