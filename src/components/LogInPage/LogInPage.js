import React, {useEffect, useState} from 'react';
import "./LogInPage.css"
import Apple from "./img/apple_logo.png"
import Facebook from "./img/facebook_logo.png"
import Google from "./img/google_logo.png"
import Vk from "./img/vk_logo.png"
import {RiEyeCloseLine, RiEyeFill} from "react-icons/ri";
import UserService from "../Services/UserService";
import LocalStorageService from "../Services/LocalStorageService";
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../js/AuthContext";

const LogInPage = () => {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const isButtonActive = password !== '' && email !== '';

    const navigate = useNavigate();
    const {login} = useAuth();
    const [error, setError] = useState('')

    useEffect(() => {
        updateUser()
    }, [email,password]);

    useEffect(() => {
        console.log(user)
    }, [user]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        updateUser()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        updateUser()
    }

    const updateUser = () => {
        setUser((prevUser) => ({
            ...prevUser,
            email: email,
            password: password
        }));
    };

    const handleSubmit = async (e) => {
        updateUser()
        e.preventDefault();
        const data = {email, password};
        try {
            await UserService.login(data).then(res => {
                if (LocalStorageService.get("access_token") != null) {
                    login();
                    navigate("/");
                }
            })
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="log-in-div">
            <div className="log-in-window">
                <div className="log-in-window-text">
                    <h1>Log in</h1>
                    <h2>New to [utk]rent? <a href="/sign-up" style={{color: "royalblue"}}>Sing-up here!</a></h2>
                </div>
                <div className="log-in-window-input">
                    <input placeholder="Email"
                           type="email"
                           value={email}
                           onChange={handleEmailChange}/>
                    <div className="password-input">
                        <input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <button style={{color: "black", background: "none"}} value={showPassword}
                                onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? <RiEyeFill/> : <RiEyeCloseLine/>
                            }
                        </button>
                    </div>
                    <h6>Forgot password?</h6>
                    {error && <div style={{color: 'red', fontSize: '14px', margin: '5px 0'}}>{error}</div>}
                    <button className="log-btn"
                            disabled={!isButtonActive}
                            style={{opacity: isButtonActive ? "1" : "0.5"}}
                            onClick={(e) => handleSubmit(e)}
                    >Log in
                    </button>
                </div>
                <hr style={{width: "85%", margin: "0 auto", marginTop: "20px"}}></hr>
                <div className="log-in-window-btn">
                    <div className="apple-div">
                        <img src={Apple} alt="1"/>
                    </div>
                    <div className="google-div">
                        <img src={Google} alt="1"/>
                    </div>
                    <div className="facebook-div">
                        <img src={Facebook} alt="1"/>
                    </div>
                    <div className="vk-div">
                        <img src={Vk} alt="1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;