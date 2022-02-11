import React, { createContext, useState } from 'react';
export const ThemContext = createContext();
export function ThemeProvider(children) {
    const [theme, setTheme] = useState('lightTheme')
    const tongleTheme = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme')
    }
    const valueTheme = { theme, tongleTheme }
    return (
        <ThemContext.Provider value={valueTheme}>
            {children}
        </ThemContext.Provider>
    );
}
