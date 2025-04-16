
import { useState } from 'react';

export default function TextContainer({ initialText }) {
    const [text, setText] = useState( initialText || '' );

    return (
        <div className="flex justify-center items-center min-h-[20%] w-full mt-[5%]">
            <pre className="w-1/2 min-h-[20%] bg-[#f7f2f2] text-center text-2xl font-bold text-[#080349] whitespace-pre-wrap break-words p-4">
                {text}
            </pre>
        </div>
    );
}