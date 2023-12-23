import React from 'react';
import "./HomePage.css"
import HandImage from "./img/handImg.png"
import Qr from "./img/qr.png"
import Appstore from "./img/app-store-icon.png"
import GooglePlay from "./img/google-play-store-icon.png"
function HomePage() {
    return (
        <div>
            <div className="home-page-banner">
                <h1>Find your dream place</h1>
                <div className="searchbar">
                    <input placeholder="Input your desired city"/>
                    <button>Search</button>
                </div>
            </div>

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
                                <img src={GooglePlay} alt="googleplay" style={{marginTop:"10px"}}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;