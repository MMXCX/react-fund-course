import * as React from 'react';
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";
//2:57:16
//TODO Learn more about "react-router-dom"

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true') {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <Navbar/>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App;
