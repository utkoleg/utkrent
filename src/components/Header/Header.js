import React, {useEffect, useState} from 'react';
import {BiHeart} from 'react-icons/bi';
import './Header.css';
import {useAuth} from '../js/AuthContext';
import LocalStorageService, {USER_INFO_KEY} from '../Services/LocalStorageService';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {MdLogout} from "react-icons/md";

function Header() {
    const {isAuthenticated, logout} = useAuth();
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
    const [username, setUsername] = useState();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            setUsername(storedUser?.username);
        }
    }, [isAuthenticated]);

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="header">
            <div className="header-logo">
                <h1>
                    <a href="/" style={{color: 'white', textDecoration: 'none'}}>
                        [utk]rent.
                    </a>
                </h1>
            </div>
            <div className="header-list">
                <ul>
                    <li className="list">Living spaces</li>
                    <li>|</li>
                    <li className="list">Business solutions</li>
                    <li>|</li>
                    <li className="list">
                        <a href="/properties"> List of properties</a>
                    </li>
                    <li>|</li>
                    {isAuthenticated ? (
                        <>
                            <li className="list">
                                <div className="dropdown"
                                     onMouseEnter={() => {setShowDropdown(true)}}
                                     onMouseLeave={() => {setShowDropdown(false)}}>
                                    {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    {username}
                                    <div className="dropdown-content">
                                        <a href="/"><BiHeart/>Favourites</a>
                                        <button onClick={handleLogout}
                                                style={{
                                                    display: showDropdown ? "inline-block" : "none",
                                                    width: "100%", color: "white"
                                                }}><MdLogout />Logout
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="list">
                                <a className="list" href="/login">
                                    Log in
                                </a>
                            </li>
                            <li>/</li>
                            <li className="list">
                                <a className="list" href="/sign-up">
                                    Sign up
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Header;