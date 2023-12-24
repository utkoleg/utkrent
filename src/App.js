import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import AddImgModal from './components/AddImgModal/AddImgModal';

function App() {
    const [selectedCard, setSelectedCard] = React.useState(null)
  
  const closePopup = () => {
    setSelectedCard(null)
  }
    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<AddImgModal />}/>
                </Routes>
            </Router>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;
