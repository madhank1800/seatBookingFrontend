import axios from "axios";


const SeatFetchApi = async (URL, data) => {
    try {
        let BaseURL = "http://localhost:8080/api/seating/";
        const respone = await axios.get(`${BaseURL}/${URL}`, data);
    
        return respone;
    } catch (error) {
        throw new Error(error);
    }
}
export default SeatFetchApi;