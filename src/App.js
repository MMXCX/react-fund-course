import * as React from 'react';
import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
//2:32:40
//TODO Learn more about "react-router-dom"

function App() {
    return (
        <>
            <Navbar/>
            <AppRouter/>
        </>
    )
}

export default App;
