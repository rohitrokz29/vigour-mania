import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw Error("Context Not Found")
    }
    return context;
}
