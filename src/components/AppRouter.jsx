import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (isAuth
            ?
            <Routes>
                {privateRoutes.map((route, key) =>
                    <Route
                        key={key}
                        path={route.path}
                        element={route.component}
                    />
                )}
                <Route path={"/*"} element={<Navigate to={"/posts"}/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, key) =>
                    <Route
                        key={key}
                        path={route.path}
                        element={route.component}
                    />
                )}
                <Route path={"/*"} element={<Navigate to={"/posts"}/>}/>
            </Routes>
    );
};

export default AppRouter;
