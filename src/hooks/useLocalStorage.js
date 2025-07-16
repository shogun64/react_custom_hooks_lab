import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? saved : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

  return [value, setValue];
}
