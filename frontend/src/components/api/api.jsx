import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3006",
    // timeout: 2000,
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Access-Control-Allow-Origin': '.http://127.0.0.1:5173/',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})