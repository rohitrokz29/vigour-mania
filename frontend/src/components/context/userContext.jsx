import {
    createContext,
    useEffect,
    useReducer,
    useState
} from "react";
import API from "../api/api";
import axios from "axios";

export const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            API.defaults.headers.common['authorization'] = action.payload.accessToken;
            return { user: action.payload };
        case "logout":
            axios.defaults.headers.common['authorization'] = null;
            return { user: null };
        default:
            return { ...state };
    }
}

export const UserState = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [state, dispatch] = useReducer(userReducer, { user: null })
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('vmuser'))
        if (user) {
            const { exp } = JSON.parse(window.atob(user.accessToken.split('.')[1]))
            if (exp * 1000 < Date.now()) {
                const { refreshToken } = JSON.parse(localStorage.getItem('vmuser'))
                API.post('/api/user/refresh', {
                    headers: { 'authorization': 'Bearer ' + refreshToken }
                })
                    .then((result) => {
                        localStorage.setItem('vmuser', result.data)
                        dispatch({ type: 'signin', payload: result.data })
                        setIsSignedIn(true);
                    })
                    .catch((error) => {
                        localStorage.clear();
                        setIsSignedIn(false)
                    })
            }
            else {
                dispatch({ type: 'signin', payload: user })
                setIsSignedIn(true)
            }
        }


    }, []);

    return (
        <UserContext.Provider value={{
            ...state,
            dispatch,
            isSignedIn,
            setIsSignedIn,
            progress,
            setProgress
        }}  >
            {children}
        </UserContext.Provider>
    )
}