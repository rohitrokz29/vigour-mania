import axios from "axios";
const {token}=JSON.parse(localStorage.getItem('vmuser'));
export default axios.create({
    baseURL:"http://localhost:3006",
    timeout: 2000,
    headers: {'Authorization': 'Bearer '+token}
})