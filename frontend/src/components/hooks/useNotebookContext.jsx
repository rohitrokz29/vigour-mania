import { useContext } from "react";
import { NotebookContext } from "../context/notebookContext";

export const useNotebookContext=()=>{
    const context=useContext(NotebookContext);
    if(!context){
        throw Error("Notebook not found");
    }
    return context;
}