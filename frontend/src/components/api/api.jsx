import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3006",
    // timeout: 2000,
    
    withCredentials: true,
    credentials: 'include',
    headers: {
        "Content-Type":"application/json"
    }
})