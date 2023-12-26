import axios from "axios";

const FLAT_BASE_REST_API_URL = "http://localhost:8080/utkrent/flats";
class FlatService{

    addFlat(flatName, flatCity, flatBed, flatBath, price, image){
        const formData = new FormData();
        formData.append('flatName', flatName);
        formData.append('flatCity', flatCity);
        formData.append('flatBed', flatBed);
        formData.append('flatBath', flatBath);
        formData.append('price', price);
        formData.append('image', image);

        axios.post(FLAT_BASE_REST_API_URL + "/add-flat", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Upload success:', response.data);
            })
            .catch(error => {
                console.error('Upload error:', error);
            });

    }
    getFlats(){
        return axios.get(FLAT_BASE_REST_API_URL);
    }

}

export default new FlatService()