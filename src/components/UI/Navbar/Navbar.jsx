import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={"navbar"}>
            {isAuth
                ? <MyButton onClick={() => logout()}>Exit</MyButton>
                : true
            }
            <div className="navbar__links">
                <Link to={"/"}>Home</Link>-
                <Link to={"/posts"}>Posts</Link>-
                <Link to={"/about"}>About</Link>-
                <Link to={"/login"}>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
