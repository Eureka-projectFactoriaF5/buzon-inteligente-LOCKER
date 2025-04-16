import React, { useState } from 'react';
import TextContainer from './TextContainer.jsx';
import KeyboardContainer from './KeyboardContainer.jsx';




export default function Keyboard() {
    const [inputText, setInputText] = useState('');
    const [modifiers, setModifiers] = useState({
        capsLock: false,
        shift: false
    });

    return (
        <div className="w-full h-full flex flex-col justify-center items-center mt-[22%]">
            <TextContainer text={inputText} />
            <KeyboardContainer
                text={inputText}
                setText={setInputText}
                modifiers={modifiers}
                setModifiers={setModifiers}
            />
        </div>
    );
}
