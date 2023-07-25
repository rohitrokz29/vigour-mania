import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeState = ({ children }) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
    
    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme));
    },[theme]);
    
    const changeTheme = () => {
        setTheme(theme => theme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}