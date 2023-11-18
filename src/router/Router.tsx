import { BrowserRouter, Routes, Route } from "react-router-dom";
import Automotive from "../pages/Automotive";
import { RouterPath } from "./RouterPath";
import Header from "../components/Header";
import Landscape from "../pages/Landscape";
import Events from "../pages/Events";
import Frames from "../pages/Frames";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={RouterPath.automotive} element={<Automotive />} />
                <Route path={RouterPath.landscape} element={<Landscape />} />
                <Route path={RouterPath.events} element={<Events />} />
                <Route path={RouterPath.frames} element={<Frames />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
