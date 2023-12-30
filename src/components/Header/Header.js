import React, {useEffect, useState} from 'react';
import {BiHeart} from 'react-icons/bi';
import './Header.css';
import {useAuth} from '../js/AuthContext';
import LocalStorageService, {USER_INFO_KEY} from '../Services/LocalStorageService';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {MdLogout} from "react-icons/md";
import {IoAddCircleOutline} from "react-icons/io5";

function Header() {
    const {isAuthenticated, logout} = useAuth();
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
    const [username, setUsername] = useState();
    const [showDropdown, setShowDropdown] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (username === "admin") {
            setIsAdmin(true)
        }
    }, [username]);

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            setUsername(storedUser?.username);
        }
    }, [isAuthenticated]);


    const handleLogout = () => {
        logout();
        window.location.href = "/"
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
                    <li className="list">
                        <a className="list"  href="/properties"> See available apartments</a>
                    </li>
                    <li>|</li>
                    {isAuthenticated ? (
                        <>
                            <li className="list">
                                <div className="dropdown"
                                     onMouseEnter={() => {
                                         setShowDropdown(true)
                                     }}
                                     onMouseLeave={() => {
                                         setShowDropdown(false)
                                     }}>
                                    {showDropdown ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                                    {username}
                                    <div className="dropdown-content">
                                        <a href="/favourites"><BiHeart/>Favourites</a>
                                        <button onClick={handleLogout}
                                                style={{
                                                    display: showDropdown ? "inline-block" : "none",
                                                    width: "100%", color: "white"
                                                }}><MdLogout/>Logout
                                        </button>
                                        {isAdmin &&
                                            <a href="/add-flat"
                                                style={{
                                                    color: "white",
                                                    width:"100%"
                                                }}><IoAddCircleOutline/>Add flat</a>}
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