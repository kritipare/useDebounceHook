import { useRef } from "react";

export function useDebounce(fn, delay) {
    const timer = useRef(null);

    const debouncedFn = (...args) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            fn(...args);
            timer.current = null;
        }, delay);
    };

    return debouncedFn;
}
