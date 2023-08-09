import { useState } from 'react';

const useFormat = (value) => {
    const [isPercent, setIsPercent] = useState(value);
    return {
        isPercent,
        setIsPercent
    }
}

export default useFormat;