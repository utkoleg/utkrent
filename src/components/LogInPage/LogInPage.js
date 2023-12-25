import React, {useState} from 'react';
import "./LogInPage.css"
import Apple from "./img/apple_logo.png"
import Facebook from "./img/facebook_logo.png"
import Google from "./img/google_logo.png"
import Vk from "./img/vk_logo.png"
import {RiEyeCloseLine, RiEyeFill} from "react-icons/ri";

const LogInPage = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="log-in-div">
            <div className="log-in-window">
                <div className="log-in-window-text">
                    <h1>Log in</h1>
                    <h2>New to [utk]rent? <a href="/sign-up" style={{color:"royalblue"}}>Sing-up here!</a></h2>
                </div>
                <div className="log-in-window-input">
                    <input placeholder="Email address"/>
                    <div className="password-input">
                        <input
                            placeholder="Password"
                            type={
                                showPassword ? "text" : "password"
                            }
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <button style={{color:"black", background:"none"}} value={showPassword} onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? <RiEyeFill /> : <RiEyeCloseLine />
                            }
                        </button>
                    </div>
                    <h6>Forgot password?</h6>
                    <button className="log-btn">Log in</button>
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