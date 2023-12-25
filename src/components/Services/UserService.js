import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/utkrent";

class UserService{

    userSignUp(user){
        return axios.post(USER_BASE_REST_API_URL + "/sign-up", user)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();