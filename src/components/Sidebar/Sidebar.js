import React, {useState} from 'react';
import {IoMdHome} from "react-icons/io";
import {BiHeart} from "react-icons/bi";
import {MdBusinessCenter, MdOutlineHomeWork} from "react-icons/md";
import {CiLogin} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import "./Sidebar.css"

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            name: "Home",
            icon: <IoMdHome/>,
            path: "/"
        },
        {
            name: "Favorites",
            icon: <BiHeart/>,
            path: "/favourites"
        },
        {
            name: "Living spaces",
            icon: <MdOutlineHomeWork/>,
            path: "/living-spaces"
        },
        {
            name: "Business solutions",
            icon: <MdBusinessCenter/>,
            path: "/business-solutions"
        },
        {
            name: "Log in",
            icon: <CiLogin/>,
            path: "/log-in"
        }
    ]
    return (
            <div style={{width: isOpen ? "200px" : "0"}} className="sidebar">
                <div className="top_section">
                    <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div >
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{display: isOpen ? "block" : "none"}}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
    );
}

export default Sidebar;