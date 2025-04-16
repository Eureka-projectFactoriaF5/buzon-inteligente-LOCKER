export const handleCharKey = (value, setText, modifiers) => {
    const { capsLock, shift } = modifiers;
    let char = value;
  
    if (/[a-z]/i.test(char)) {
      const isUpper = capsLock !== shift;
      char = isUpper ? char.toUpperCase() : char.toLowerCase();
    }
  
    setText(prevText => prevText + char);
  };

export const handleSpaceKey = (setText) => {
    setText(prevText => prevText + ' ');
};

export const handleEnterKey = (setText) => {
    setText(prevText => prevText + '\n');
};

export const handleBackspaceKey = (setText) => {
    setText(prevText => prevText.slice(0, -1));
};

export const handleModifierKey = (value, setModifiers) => {
    setModifiers(prevModifiers => ({
        ...prevModifiers,
        [value]: !prevModifiers[value]
    }));
};