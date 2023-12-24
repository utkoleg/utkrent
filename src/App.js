import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                </Routes>
            </BrowserRouter>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;
