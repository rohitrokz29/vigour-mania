import { createContext, useEffect, useReducer } from "react";

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

    const [state, dispatch] = useReducer(userReducer, { user: null })
    useEffect(() => {
        const user= JSON.parse(localStorage.getItem('vmuser'))
        
        if(user){
            dispatch({type:'login',payload:user})
            console.log(state);
        }
        console.log(user)
    }, []);

    return (
        <UserContext.Provider value={{ ...state, dispatch }}  >
            {children}
        </UserContext.Provider>
    )
}