import { useUserContext } from "./useUserContext";

export const useLogout=()=>{
    const {dispatch}=useUserContext();
    const logout=()=>{
        console.log('logout')
        localStorage.removeItem('vmuser');
        dispatch({type:'logout'});
    }
    return {logout};
}