import axios from "axios";
/**
 * Providing axios
 *      -- Base Url as baseUrl
 *      --withCredentials and credentials give access to send cookies and other data through axios
 *      --content type  tells the axios to send data in which format
 */
export default axios.create({
    baseURL: "http://localhost:3006",
    // timeout: 2000,
    
    withCredentials: true,
    credentials: 'include',
    headers: {
        "Content-Type":"application/json"
    }
})