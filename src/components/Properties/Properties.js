import React, {useEffect, useState} from 'react';
import "./Properties.css";
import {BiHeart} from "react-icons/bi";
import {LuPhone} from "react-icons/lu";
import FlatService from "../Services/FlatService";
import UserService from "../Services/UserService";
import {useAuth} from "../js/AuthContext";
import {useNavigate} from "react-router-dom";
import {IoSearch} from "react-icons/io5";
import {PiSortAscendingBold, PiSortDescendingBold} from "react-icons/pi";
import {HiOutlineMenu} from "react-icons/hi";

function Properties() {
    const [flats, setFlats] = useState([]);
    const [filteredFlats, setFilteredFlats] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const {isAuthenticated} = useAuth();
    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);
    const [likedFlats, setLikedFlats] = useState([]);
    const [sortedFlats, setSortedFlats] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            setUser(storedUser);
            setId(storedUser?.id);
            setUser(storedUser?.username)


            // Fetch liked flats for the user
            UserService.getLikedFlats(id)
                .then(response => {
                    const likedFlatIds = response.data.map(flat => flat.id);
                    setLikedFlats(likedFlatIds);
                })
                .catch(error => console.log(error));
        }
    }, [isAuthenticated, id]);

    useEffect(() => {
        getItems();
    }, []);  // This useEffect will only run once when the component mounts

    useEffect(() => {
        sortFlats();
    }, [sortOrder, filteredFlats]);  // Trigger sorting when sortOrder or filteredFlats change

    useEffect(() => {
        filterFlats(searchTerm);
    }, [searchTerm, flats]);

    const getItems = () => {
        FlatService.getFlats()
            .then((response) => {
                setFlats(response.data);
                setFilteredFlats(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    const like = (flatId) => {
        if (isAuthenticated) {
            if (likedFlats.includes(flatId)) {
                // If already liked, remove from favorites
                UserService.unlikeFlat(id, flatId)
                    .then(() => {
                        setLikedFlats(prevLikedFlats => prevLikedFlats.filter(id => id !== flatId));
                    })
                    .catch(error => console.log(error));
            } else {
                // If not liked, add to favorites
                UserService.likeFlat(id, flatId)
                    .then(() => {
                        setLikedFlats(prevLikedFlats => [...prevLikedFlats, flatId]);
                    })
                    .catch(error => console.log(error));
            }
        } else {
            navigate("/login");
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterFlats(e.target.value);
    };

    const filterFlats = (searchTerm) => {
        const filtered = flats.filter(flat => {
            const cityMatch = flat.city.toLowerCase().includes(searchTerm.toLowerCase());
            const nameMatch = flat.name.toLowerCase().includes(searchTerm.toLowerCase());

            return cityMatch || nameMatch
        });

        setFilteredFlats(filtered);
    };

    const toggleSortOrder = () => {
        if (sortOrder === 'none') {
            setSortOrder('asc');
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
        } else {
            setSortOrder('none');
        }
    };

    const sortFlats = () => {
        const sorted = [...filteredFlats];
        if (sortOrder === 'asc') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            sorted.sort((a, b) => b.price - a.price);
        }
        setSortedFlats(sorted);
    };

    const isFlatLiked = (flatId) => likedFlats.includes(flatId);


    return (
        <div className="prop-content">
            <div className="search-bar">
                <div className="search-bar-div">
                    <IoSearch style={{fontSize: "23px"}}/>
                    <input className="search"
                           type="text"
                           placeholder="Search by city, name, or flat name"
                           value={searchTerm}
                           onChange={handleSearch}
                    />
                </div>
                <button className="sort-button" onClick={toggleSortOrder}>
                    {sortOrder === 'asc' && <PiSortAscendingBold/>}
                    {sortOrder === 'desc' && <PiSortDescendingBold/>}
                    {sortOrder === 'none' && <HiOutlineMenu/>}
                </button>
            </div>
            <section className="properties properties-section">
                <ul className="properties-list">
                    {sortedFlats.map(flat => (
                        <li className="properties-card" key={flat.id}>
                            <img className="prop-image" src={flat.imageUrl} alt="asd"></img>
                            <div className="prop-info">
                                <div className="prop-main-info">
                                    <div className="prop-info-price">
                                        {flat.price}$
                                    </div>
                                    <div className="prop-info-title">
                                        {flat.name}
                                    </div>
                                </div>
                                <div className="prop-about-info">
                                    <div className="prop-address">
                                        {flat.city}
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
                                            background: isFlatLiked(flat.id) ? "red" : "white",
                                            color: isFlatLiked(flat.id) ? "white" : "royalblue",
                                            borderColor: isFlatLiked(flat.id) ? "red" : "royalblue"
                                        }}
                                        onClick={() => like(flat.id)}>
                                <span style={{fontSize: "18px", display: "flex"}}>
                                    <BiHeart/>
                                </span>
                                        {isFlatLiked(flat.id) ? "Remove from Favorites" : "Add to Favorites"}
                                    </button>
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

export default Properties;
