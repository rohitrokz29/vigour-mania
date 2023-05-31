import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { user: action.payload };
            break;
        case "signup":
            return { user: action.payload };
        default:
            return {...state};
            break;
    }
}

export const UserState = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, { user: null })
    useEffect(()=>{
        console.log(state);
    },[state]);
    
    return (
        <UserContext.Provider value={{ ...state ,dispatch}}  >
            {children}
        </UserContext.Provider>
    )
}