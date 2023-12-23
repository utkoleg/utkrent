import React from 'react';
import {BiHeart} from "react-icons/bi";
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>[utk]rent.</h1>
            </div>
            <div className="header-list">
                <ul>
                    <li><BiHeart/></li>
                    <li>|</li>
                    <li>Living spaces</li>
                    <li>|</li>
                    <li>Business solutions</li>
                    <li>|</li>
                    <li>List of properties</li>
                    <li>|</li>
                    <li>Log in</li>
                    <li>|</li>
                    <li>Sing up</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;