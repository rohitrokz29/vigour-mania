import { createContext, useEffect, useReducer, useState } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            return { user: action.payload };
        case "logout":
            return {user:null};            
        default:
            return { ...state };
    }
}

export const UserState = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [state, dispatch] = useReducer(userReducer, { user: null })
    useEffect(() => {
        const user= JSON.parse(localStorage.getItem('vmuser'))
        if(user){
            dispatch({type:'signin',payload:user})
            setIsSignedIn(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{ ...state, dispatch,isSignedIn ,setIsSignedIn}}  >
            {children}
        </UserContext.Provider>
    )
}