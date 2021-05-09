import { useState, useEffect } from 'react';

export function useSessionStorage(key, initialValue = null) {

    const [value, setValue] = useState(() => {
        try {
            const data = window.sessionStorage.getItem(key);
            return data ? JSON.parse(data) : initialValue; 
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue])

    return [value, setValue];

}