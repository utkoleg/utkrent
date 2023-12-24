import React from 'react';
import {BiHeart} from "react-icons/bi";
import "./Header.css"
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1><a href="/">[utk]rent.</a></h1>
            </div>
            <div className="header-list">
                <ul>
                    <li className="list"><BiHeart/></li>
                    <li>|</li>
                    <li className="list">Living spaces</li>
                    <li>|</li>
                    <li className="list">Business solutions</li>
                    <li>|</li>
                    <li className="list">List of properties</li>
                    <li>|</li>
                    <li className="list"><a className="list" href="/login">Log in</a></li>
                    <li>|</li>
                    <li className="list">Sing up</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;