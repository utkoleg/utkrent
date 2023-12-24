import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import AddImgModal from './components/AddImgModal/AddImgModal';
import LogInPage from "./components/LogInPage/LogInPage";

function App() {

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<LogInPage />}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;