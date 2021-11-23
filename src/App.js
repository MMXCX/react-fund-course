import React from 'react';
import './styles/App.css';
import Posts from "./pages/Posts";
import About from "./pages/About";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
//2:20:16

function App() {
    return (
        <Router>
            <div className={"navbar"}>
                <Navbar/>
            </div>

            <Routes>
                <Route path={"/posts"} element={<Posts/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/*"} element={
                    <h1>Route is Not exist!</h1>
                }/>

            </Routes>
        </Router>
    )
}

export default App;
