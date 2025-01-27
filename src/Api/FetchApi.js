import axios from "axios";


const UseFetch = async (URL, data) => {
    try {
        let BaseURL = "http://localhost:8080/api/user";
        const respone = await axios.post(`${BaseURL}/${URL}`, data);
    
        return respone;
    } catch (error) {
        throw new Error(error);
    }
}
export default UseFetch;