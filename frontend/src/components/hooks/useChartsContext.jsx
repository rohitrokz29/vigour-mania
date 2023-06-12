import { useContext } from "react"; 
import { chartContext } from "../context/chartContext";

export const useChartsContext=()=>{
    const context=useContext(chartContext);
    if(!context){
        throw Error("Chart context not found");
    }
    return context;
}
