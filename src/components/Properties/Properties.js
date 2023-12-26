import React, { useEffect, useState } from 'react';
import "./Properties.css";
import { BiHeart } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import FlatService from "../Services/FlatService";
import { useAuth } from "../js/AuthContext";
import LocalStorageService, { USER_INFO_KEY } from "../Services/LocalStorageService";
import UserService from "../Services/UserService";
import { useNavigate } from "react-router-dom";

function Properties() {
    const [flats, setFlats] = useState([]);
    const [filteredFlats, setFilteredFlats] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
    const [username, setUsername] = useState('');

    const [likedFlats, setLikedFlats] = useState(
        JSON.parse(LocalStorageService.get("likedFlats")) || {}
    );

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            setUsername(storedUser?.username);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        FlatService.getFlats()
            .then((response) => {
                setFlats(response.data);
                setFilteredFlats(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const like = (flatId) => {
        const updatedLikedFlats = {
            ...likedFlats,
            [flatId]: !likedFlats[flatId]
        };

        setLikedFlats(updatedLikedFlats);
        LocalStorageService.save("likedFlats", JSON.stringify(updatedLikedFlats));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterFlats(e.target.value);
    };

    const filterFlats = (searchTerm) => {
        const filtered = flats.filter(flat => {
            const cityMatch = flat.city.toLowerCase().includes(searchTerm.toLowerCase());
            const nameMatch = flat.name.toLowerCase().includes(searchTerm.toLowerCase());
            const flatNameMatch = flat.flatName ? flat.flatName.toLowerCase().includes(searchTerm.toLowerCase()) : false;

            return cityMatch || nameMatch || flatNameMatch;
        });

        setFilteredFlats(filtered);
    };

    return (
        <div className="prop-content">
            <section className="properties properties-section">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by city, name, or flat name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <h1 className="properties-heading">Properties</h1>
                <ul className="properties-list">
                    {filteredFlats.map(flat => {
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
                                                background: likedFlats[flat.id] ? "red" : "white",
                                                color: likedFlats[flat.id] ? "white" : "royalblue",
                                                borderColor: likedFlats[flat.id] ? "red" : "royalblue"
                                            }}
                                            onClick={() => {
                                                if (isAuthenticated) {
                                                    if (likedFlats[flat.id]) {
                                                        UserService.unlikeFlat(username, flat.id);
                                                    } else {
                                                        UserService.likeFlat(username, flat.id);
                                                    }
                                                    like(flat.id);
                                                } else {
                                                    navigate("/login");
                                                }
                                            }}>
                                            <span style={{ fontSize: "18px", display: "flex" }}>
                                                <BiHeart />
                                            </span>
                                            {likedFlats[flat.id] ? "Remove from Favorites" : "Add to Favorites"}
                                        </button>
                                        <a href="tel:87756739161" className="prop-number">
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

export default Properties;
