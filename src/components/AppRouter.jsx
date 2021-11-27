import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
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
