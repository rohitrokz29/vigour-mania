import { createContext } from "react";

export const NotebookContext = createContext();

export const NotebookState = ({ children }) => {
const nod="wjw"
    return (
        <NotebookContext.Provider
            value={nod }
        >
            {children}
        </NotebookContext.Provider>
    )
}