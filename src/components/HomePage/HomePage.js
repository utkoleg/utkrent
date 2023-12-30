import React from 'react';
import "./HomePage.css"
import HandImage from "./img/handImg.png"
import Qr from "./img/qr.png"
import Appstore from "./img/app-store-icon.png"
import GooglePlay from "./img/google-play-store-icon.png"
import Flat1 from "./img/flats/flat.jpg"
import Flat2 from "./img/flats/flat2.jpg"
import Flat3 from "./img/flats/flat3.jpg"
import {useNavigate} from "react-router-dom";


function HomePage() {
    const navigate = useNavigate()
    const goToProperties = () => {
        navigate("/properties")
    }
    return (
        <div>
            {/*ПОИСКОВАЯ СТРОКА*/}
            <div className="home-page-banner">
                <h1>Find your dream place</h1>
                <button onClick={goToProperties}>See all offers</button>
            </div>

            {/*МЕДИА*/}
            <div className="home-page-app">
                <div className="image-div">
                    <img src={HandImage} alt="hand"/>
                </div>
                <div className="image-text">
                    <div style={{width: "80%"}}>
                        <h1>The <span style={{color: "royalblue"}}> fastest</span> way to rent a home is with the app.
                        </h1>
                        <h2>Now with the app saving your favorite properties is easier than ever. Available now in the
                            Apple
                            App Store and Google Play App Store.</h2>
                        <div className="qr">
                            <img src={Qr} alt="qr code"/>
                            <div className="qr-icons">
                                <img src={Appstore} alt="appstore"/>
                                <img src={GooglePlay} alt="googleplay" style={{marginTop: "10px"}}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="home-page-bot">
                <div className="dodots">
                    <div className="dots">
                        <h1>Best solutions for <span style={{color: "royalblue"}}> you</span></h1>
                        <h2>lorem ipsum lorem ipsum lorem ipsum </h2>
                        <button>See offers</button>
                    </div>
                </div>

                <div className="bot-menu">
                    <div className="bot-menu-element">
                        <img src={Flat1} alt="flat1"/>
                        <div className="bot-menu-text">
                            <h1>Almaty, Al-Farabi 9</h1>
                            <h2>Самый крутой домешник спору нет</h2>
                            <button>See more</button>
                        </div>
                    </div>

                    <div className="bot-menu-element">
                        <img src={Flat2} alt="fla2"/>
                        <div className="bot-menu-text">
                            <h1>Shymkent, Nursat 1</h1>
                            <h2>Ну нурсат спорная фигня</h2>
                            <button>See more</button>
                        </div>
                    </div>

                    <div className="bot-menu-element">
                        <img src={Flat3} alt="flat3"/>
                        <div className="bot-menu-text">
                            <h1>Astana, Mangilik el 19</h1>
                            <h2>Астана для лошков</h2>
                            <button>See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;