import { lazy } from "react";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Validate } from "./validate";

const Home = lazy(() =>
    import(/* webpackPreload: true */"~@Pages/home").then(module => ({
        default: module.Home
    }))
);
const List = lazy(() =>
    import(/* webpackPrefetch: true */"~@Pages/list").then(module => ({
        default: module.List
    }))
);

export function ProjectRoutes() {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Validate/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/list" element={<List/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </HashRouter>
    )
}
