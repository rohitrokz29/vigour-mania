import axios from "axios"
import { useState } from "react"
import { useUserContext } from "./useUserContext";

export const useSignup = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useUserContext();
    const SignUp = async (data) => {


        await fetch("http://localhost:3006/api/user/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: data
        }).then(async (res) => {
            if (res.ok) {
                const user = await res.json();
                // user=await user.json();
                localStorage.setItem('vmuser', JSON.stringify(user));
                dispatch({ type: 'signup', payload: user })

            }
        }).catch(err => console.log(err))
        //user.ok is true if status code is between 200-299



    }
    return { SignUp }
}