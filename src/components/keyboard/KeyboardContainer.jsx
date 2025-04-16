import { Key } from "./Key.jsx";
import React from "react";
import { handleCharKey, handleSpaceKey, handleEnterKey, handleBackspaceKey, handleModifierKey } from './utils/keyboardHandlers.jsx'

const KeyboardContainer = ({ text, setText, modifiers, setModifiers }) => {
    const handleKeyPress = (key) => {
        switch (key.type) {
          case 'char':
            handleCharKey(key.value, setText, modifiers);
      
            if (modifiers.shift) {
              setModifiers(prev => ({ ...prev, shift: false }));
            }
            break;
      
          case 'space':
            handleSpaceKey(setText);
            break;
      
          case 'enter':
            handleEnterKey(setText);
            break;
      
          case 'backspace':
            handleBackspaceKey(setText);
            break;
      
          case 'modifier':
            handleModifierKey(key.modifier, setModifiers);
            break;
      
          default:
            break;
        }
      };
      
  
    const keyboardLayout = [
      [
        { id: '1', value: '1', type: 'char' },
        { id: '2', value: '2', type: 'char' },
        { id: '3', value: '3', type: 'char' },
        { id: '4', value: '4', type: 'char' },
        { id: '5', value: '5', type: 'char' },
        { id: '6', value: '6', type: 'char' },
        { id: '7', value: '7', type: 'char' },
        { id: '8', value: '8', type: 'char' },
        { id: '9', value: '9', type: 'char' },
        { id: '0', value: '0', type: 'char' }
      ],
      [
        { id: 'q', value: 'q', type: 'char' },
        { id: 'w', value: 'w', type: 'char' },
        { id: 'e', value: 'e', type: 'char' },
        { id: 'r', value: 'r', type: 'char' },
        { id: 't', value: 't', type: 'char' },
        { id: 'y', value: 'y', type: 'char' },
        { id: 'u', value: 'u', type: 'char' },
        { id: 'i', value: 'i', type: 'char' },
        { id: 'o', value: 'o', type: 'char' },
        { id: 'p', value: 'p', type: 'char' }
      ],
      [
        { id: 'a', value: 'a', type: 'char' },
        { id: 's', value: 's', type: 'char' },
        { id: 'd', value: 'd', type: 'char' },
        { id: 'f', value: 'f', type: 'char' },
        { id: 'g', value: 'g', type: 'char' },
        { id: 'h', value: 'h', type: 'char' },
        { id: 'j', value: 'j', type: 'char' },
        { id: 'k', value: 'k', type: 'char' },
        { id: 'l', value: 'l', type: 'char' }
      ],
      [
        { id: 'caps', value: 'Caps Lock', type: 'modifier', modifier: 'capsLock' },
        { id: 'z', value: 'z', type: 'char' },
        { id: 'x', value: 'x', type: 'char' },
        { id: 'c', value: 'c', type: 'char' },
        { id: 'v', value: 'v', type: 'char' },
        { id: 'b', value: 'b', type: 'char' },
        { id: 'n', value: 'n', type: 'char' },
        { id: 'm', value: 'm', type: 'char' },
        { id: 'backspace', value: '←', type: 'backspace' }
      ],
      [
        { id: 'shift', value: 'Shift', type: 'modifier', modifier: 'shift' },
        { id: 'space', value: ' ', type: 'space' },
        { id: 'enter', value: 'Enter', type: 'enter' }
      ]
    ];
  
    return (
      <div className="flex justify-center mt-[6%]">
        <div className="p-[1%] flex flex-col max-w-full justify-center items-center border-none">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex w-[320%] h-[20%] justify-center items-center">
              {row.map((key) => (
                <Key
                  key={key.id}
                  {...key}
                  onPress={() => handleKeyPress(key)}
                  isActive={key.modifier ? modifiers[key.modifier] : false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default KeyboardContainer