import { useState } from 'react';

export const Keyboard = () => {
    const [text, setText] = useState('');
    const [isCapsLock, setIsCapsLock] = useState(false);

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
    const letters = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        ['shift', 'space', 'erase']
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', text);
        
    };

    const handleKeyPress = (key) => {
        if (text.length >= 8 && key !== 'erase') {
            return;}

        switch (key) {
            case 'erase':
                setText(prev => prev.slice(0, -1));
                break;
            case 'space':
                setText(prev => prev + ' ');
                break;
            
            case 'shift':
                setIsCapsLock(!isCapsLock);
                break;
            default:
                setText(prev => prev + (isCapsLock ? key.toUpperCase() : key.toLowerCase()));
        }
    };

    const renderKey = (key) => {
        const specialStyles = {
            'erase': 'w-[23%] bg-blue-600 hover:bg-blue-400 ', 
            shift: 'w-[17%] bg-blue-600 hover:bg-blue-400',
            space: 'w-[60%] bg-white hover:bg-blue-400',
        };

        return (
            <button
                key={`key-${key}`}
                onClick={() => handleKeyPress(key)}
                className={`p-[0.9%] size-12 m-[0.2%] transition-colors rounded-sm text-blue text-[1.3rem] font-[700]
                    ${specialStyles[key] || 'bg-white hover:bg-blue-200 flex-1'}`}
                    >           
                {key === 'space' ? 'ESPACIO' : key === 'enter' ? 'INTRO' : key === 'erase' ? 'BORRAR' : isCapsLock ? key.toUpperCase() : key.toLowerCase()}
            </button>
        );
    };

    return (
        <form onSubmit={handleSubmit} className="bg-blue flex flex-col  items-center  mt-[5%] p-4 ">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-[70%] p-[0.8%] tracking-wider text-center rounded-md bg-white  text-blue-800 text-[2rem] font-bold "
            />
            <div className="bg-blue rounded-lg space-y-2 mt-[6%] w-[70%] text-black">
                {[numbers, ...letters].map((row, i) => (
                    <div key={i} className="flex gap-1">
                        {row.map(renderKey)}
                    </div>
                ))}
            </div>
        </form>
    );
};

