import axios from "axios";


const UseBookApi = async (URL, data) => {
    try {
        let BaseURL = "http://localhost:8080/api/book";
        const respone = await axios.post(`${BaseURL}/${URL}`, data);
    
        return respone;
    } catch (error) {
        throw new Error(error);
    }
}
export default UseBookApi;       