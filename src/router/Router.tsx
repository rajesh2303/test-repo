import { BrowserRouter, Routes, Route } from "react-router-dom";
import Automotive from "../pages/Automotive";
import { RouterPath } from "./RouterPath";
import Header from "../components/Header";
import Landscape from "../pages/Landscape";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={RouterPath.automotive} element={<Automotive />} />
                <Route path={RouterPath.landscape} element={<Landscape />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
