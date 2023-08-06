import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeState = ({ children }) => {
    const [theme, setTheme] = useState((localStorage.getItem('theme')));
    useEffect(()=>{
        if(!theme){
            setTheme(()=>'light');
        }
        localStorage.setItem('theme',theme);
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