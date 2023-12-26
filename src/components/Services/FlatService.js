import axios from "axios";

const FLAT_BASE_REST_API_URL = "http://localhost:8080/utkrent/flats";
class FlatService{

    addFlat(flat){
        return axios.post(FLAT_BASE_REST_API_URL + "/add-flat", flat)
    }
    getFlats(){
        return axios.get(FLAT_BASE_REST_API_URL);
    }

}