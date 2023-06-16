import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:3006",
    // timeout: 2000,
    headers:{
        'authorization':JSON.parse(localStorage.getItem('vmuser'))?.accessToken
    }
})