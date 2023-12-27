import React, { useEffect, useState } from 'react';
import { LuPhone } from "react-icons/lu";
import { useAuth } from "../js/AuthContext";
import LocalStorageService, { USER_INFO_KEY } from "../Services/LocalStorageService";
import UserService from "../Services/UserService";


function Favorites() {
    const [likedFlats, setLikedFlats] = useState([]);
    const { isAuthenticated } = useAuth();
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
    const [id, setId] = useState()

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            getLikedFlats(storedUser?.id);
        }
    }, [isAuthenticated]);

    const getLikedFlats = (id) => {
        UserService.getLikedFlats(id)
            .then((response) => {
                setLikedFlats(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="prop-content">
            <h1>Favourites</h1>
            <section className="properties properties-section">
                <ul className="properties-list">
                    {likedFlats.map(flat => (
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
                                    <a href="tel:87756739161" className="prop-number">
                                        <LuPhone/> <span>(708) 158-63-43</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Favorites;
