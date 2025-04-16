export const handleCharKey = (value, setText) => {
    setText(prevText => prevText + value);
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