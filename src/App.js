import * as React from 'react';
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useState} from "react";
//2:42:40
//TODO Learn more about "react-router-dom"

function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <Navbar/>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App;
