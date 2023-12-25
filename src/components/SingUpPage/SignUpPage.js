import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import Apple from '../LogInPage/img/apple_logo.png';
import Google from '../LogInPage/img/google_logo.png';
import Facebook from '../LogInPage/img/facebook_logo.png';
import Vk from '../LogInPage/img/vk_logo.png';
import './SignUpPage.css';
import UserService from '../Services/UserService';

function SignUpPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    //USER
    const [user, setUser] = useState(null);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // PASSWORD MISMATCH CHECK
    const [showPassword, setShowPassword] = useState(false);
    const [isMatch, setIsMatch] = useState(true);

    // VARIABLE HANDLERS
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        updateUser();
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        updateUser();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        updateUser();
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setIsMatch(value === password);
        updateUser();
    };

    const updateUser = () => {
        if (username !== '' && email !== '' && password !== '') {
            setUser({
                username: username,
                email: email,
                password: password
            });
            console.log('User updated:', user);
        } else {
            setUser(null);
        }
    };

    const isButtonActive = password !== '' && confirmPassword !== '' && isMatch && username !== '' && email !== '';

    const signUpUser = () => {
        setLoading(true);
        console.log(user);
        UserService.userSignUp(user)
            .then((response) => {
                console.log(response.data);
                // Redirect to login page after successful signup
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error during sign-up:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="sign-up-div">
            <div className="sign-up-window">
                <div className="sign-up-window-text">
                    <h1>Sign up</h1>
                    <h2>
                        Already have an account?{' '}
                        <a href="/login" style={{ color: 'royalblue' }}>
                            Log-in here!
                        </a>
                    </h2>
                </div>
                <div className="sign-up-window-input">
                    <input
                        placeholder="Name"
                        type="text"
                        value={username}
                        onChange={handleUserNameChange}
                    />
                    <input
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div className="password-input">
                        <input
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <button
                            style={{ color: 'black', background: 'none' }}
                            value={showPassword}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <RiEyeFill /> : <RiEyeCloseLine />}
                        </button>

                        <input
                            placeholder="Confirm password"
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    {!isMatch && (
                        <p style={{ color: 'red', fontSize: '14px', margin: '5px 0' }}>
                            Passwords do not match
                        </p>
                    )}
                    <button
                        className="sign-btn"
                        disabled={!isButtonActive || loading}
                        onClick={signUpUser}
                        style={{ opacity: isButtonActive ? '1' : '0.5' }}
                    >
                        Sign up
                    </button>
                </div>
                <hr style={{ width: '85%', margin: '0 auto', marginTop: '20px' }}></hr>
                <div className="sign-up-window-btn">
                    <div className="apple-div">
                        <img src={Apple} alt="1" />
                    </div>
                    <div className="google-div">
                        <img src={Google} alt="1" />
                    </div>
                    <div className="facebook-div">
                        <img src={Facebook} alt="1" />
                    </div>
                    <div className="vk-div">
                        <img src={Vk} alt="1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
