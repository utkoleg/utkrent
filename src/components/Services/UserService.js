import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/utkorent";

class UserService{

    userSignUp(user){
        return axios.post(USER_BASE_REST_API_URL + '/' + "sign-up", user)
    }

    // userAddRole(id, roleName){
    //     return axios.post(USER_BASE_REST_API_URL + '/' + "add-role-to-user", id, roleName)
    // }



}

export default new UserService();