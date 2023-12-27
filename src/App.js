import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import LogInPage from "./components/LogInPage/LogInPage";
import SignUpPage from "./components/SingUpPage/SignUpPage";
import Properties from "./components/Properties/Properties";
import AddFlatPage from "./components/AddFlatPage/AddFlatPage";
import LocalStorageService, {USER_INFO_KEY} from "./components/Services/LocalStorageService";
import {useAuth} from "./components/js/AuthContext";
import AccessDenied from "./components/AccessDenied/AccessDenied";
import Favorites from "./components/Fauvorites/Fauvorites";

function App() {

    const {isAuthenticated, logout} = useAuth();
    const [user, setUser] = useState(JSON.parse(LocalStorageService.get(USER_INFO_KEY)));
    const [username, setUsername] = useState();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (username === "admin") {
            setIsAdmin(true)
        }
    }, [username]);

    useEffect(() => {
        if (isAuthenticated) {
            const storedUser = JSON.parse(LocalStorageService.get(USER_INFO_KEY));
            setUser(storedUser);
            setUsername(storedUser?.username);
        }
    }, [isAuthenticated]);

    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<LogInPage/>}/>
                    <Route path="/sign-up" element={<SignUpPage/>}/>
                    <Route path="/properties" element={<Properties/>}/>
                    <Route path="/favourites" element={<Favorites/>}/>
                    {isAdmin ? (
                        <Route path="/add-flat" element={<AddFlatPage/>}/>
                    ) : (
                        <Route path="/add-flat" element={<AccessDenied/>}/>
                    )
                    }
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;