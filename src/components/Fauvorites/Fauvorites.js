import React, { useEffect, useState } from 'react';
import FlatService from "../Services/FlatService";
import { LuPhone } from "react-icons/lu";
import { useAuth } from "../js/AuthContext";
import LocalStorageService, { USER_INFO_KEY } from "../Services/LocalStorageService";
import UserService from "../Services/UserService";


function Favorites() {
    const [likedFlats, setLikedFlats] = useState([]);
    const { isAuthenticated } = useAuth();
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            getLikedFlats(storedUser?.username);
        }
    }, [isAuthenticated]);

    const getLikedFlats = (username) => {
        UserService.getLikedFlats(username)
            .then((response) => {
                setLikedFlats(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="favorites-content" style={{height:"100vh"}}>
            <section className="favorites favorites-section">
                <h1 className="favorites-heading">My Favorites</h1>
                <ul className="favorites-list">
                    {likedFlats.map(flat => {
                        return (
                            <li className="favorites-card" key={flat.id}>
                                <img className="favorites-image" src={flat.imageUrl} alt="asd"></img>
                                <div className="favorites-info">
                                    <div className="favorites-main-info">
                                        <div className="favorites-info-price">
                                            {flat.price}$
                                        </div>
                                        <div className="favorites-info-title">
                                            {flat.city}
                                        </div>
                                    </div>
                                    <div className="favorites-about-info">
                                        <div className="favorites-address">
                                            {flat.name}
                                        </div>
                                        <div className="favorites-flat-info">
                                            <span>{flat.bed} Beds</span>
                                            <span>•</span>
                                            <span>{flat.bath} Baths</span>
                                        </div>
                                    </div>
                                    <div className="favorites-contacts">
                                        <a href="tel:87756739161" className="favorites-number">
                                            <LuPhone /> <span>(708) 158-63-43</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Favorites;
