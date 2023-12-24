import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
    <Header/>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
