import React, {useEffect, useState} from 'react';
import "./Properties.css";
import {BiHeart} from "react-icons/bi";
import {LuPhone} from "react-icons/lu";
import FlatService from "../Services/FlatService";
import {useAuth} from "../js/AuthContext";
import LocalStorageService, {USER_INFO_KEY} from "../Services/LocalStorageService";
import UserService from "../Services/UserService";
import {useNavigate} from "react-router-dom";

function Properties() {
    const [flats, setFlats] = useState([]);
    const navigate = useNavigate();

    const {isAuthenticated, logout} = useAuth();
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            setUsername(storedUser?.username);
        }
    }, [isAuthenticated]);

    const like = () => {
        setIsLiked(!isLiked);
    }

    useEffect(() => {
        getItems()

    }, []);

    const getItems = () => {
        FlatService.getFlats().then((response) => {
            setFlats(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="prop-content">
            <section className="properties properties-section">
                <h1 className="properties-heading">Properties</h1>
                <ul className="properties-list">
                    {flats.map(flat => {
                        return (
                            <li className="properties-card" key={flat.id}>
                                <img className="prop-image" src={flat.imageUrl} alt="asd"></img>
                                <div className="prop-info">
                                    <div className="prop-main-info">
                                        <div className="prop-info-price">
                                            {flat.price}$
                                        </div>
                                        <div className="prop-info-title">
                                            {flat.city}
                                        </div>
                                    </div>
                                    <div className="prop-about-info">
                                        <div className="prop-address">
                                            {flat.name}
                                        </div>
                                        <div className="prop-flat-info">
                                            <span>{flat.bed} Beds</span>
                                            <span>•</span>
                                            <span>{flat.bath} Baths</span>
                                        </div>
                                    </div>
                                    <div className="prop-contacts">
                                        <button
                                            className='addToFavourites'
                                            style={{
                                                background: isLiked ? "red" : "white",
                                                color: isLiked ? "white" : "royalblue",
                                                borderColor: isLiked ? "red" : "royalblue"
                                            }}
                                            onClick={() => {
                                                if (isAuthenticated) {
                                                    if (isLiked) {
                                                        UserService.unlikeFlat(username, flat.id);
                                                    } else {
                                                        UserService.likeFlat(username, flat.id);
                                                    }
                                                    like();
                                                } else {
                                                    navigate("/login");
                                                }
                                            }}>
    <span style={{fontSize: "18px", display: "flex"}}>
        <BiHeart/>
    </span>
                                            {isLiked ? "Remove from Favorites" : "Add to Favorites"}
                                        </button>
                                        <a href="tel:87756739161" className="prop-number">
                                            <LuPhone/> <span>(708) 158-63-43</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    {/* The rest of your static content */}
                </ul>
            </section>
        </div>
    );
}

export default Properties;
