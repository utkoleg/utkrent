import axios from "axios";
import LocalStorageService, {ACCESS_TOKEN_KEY, USER_INFO_KEY} from "./LocalStorageService";
import {useNavigate} from "react-router-dom";

const USER_BASE_REST_API_URL = "http://localhost:8080/utkrent";


class UserService{


    userSignUp(user){
        return axios.post(USER_BASE_REST_API_URL + "/sign-up", user)
    }

    login(data) {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);

        return axios.post(USER_BASE_REST_API_URL + "/login", formData)
            .then(res => {
                LocalStorageService.save(ACCESS_TOKEN_KEY, res.headers.get("access_token"));
                LocalStorageService.save(USER_INFO_KEY, JSON.stringify(res.data.user));
                console.log(res.headers.get("access_token"));
                console.log(JSON.stringify(res.data.user))
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    // Authentication failed, handle the error
                    console.error('Authentication failed:', error.response.data.message);
                    throw new Error('Invalid username or password');
                } else {
                    // Handle other errors
                    console.error('Unexpected error during login:', error);
                    throw new Error('An unexpected error occurred');
                }
            });
    }


    static logout() {
        LocalStorageService.clearAll();
    }

    // UserService.js

    likeFlat(userId, flatId) {
        return axios.post(USER_BASE_REST_API_URL + "/addFlatToUser", null, {
            params: {
                userId: userId,
                flatId: flatId
            }
        });
    }

    unlikeFlat(userId, flatId) {
        return axios.post(USER_BASE_REST_API_URL + "/removeFlatFromUser", null, {
            params: {
                userId: userId,
                flatId: flatId
            }
        });
    }

    getLikedFlats(userId) {
        const token = LocalStorageService.get(ACCESS_TOKEN_KEY);

        return axios.get(`${USER_BASE_REST_API_URL}/liked-flats/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }



}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();