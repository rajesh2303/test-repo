import { BrowserRouter, Routes, Route } from "react-router-dom";
import Automotive from "../pages/Automotive";
import { RouterPath } from "./RouterPath";
import Header from "../components/Header";
import Landscape from "../pages/Landscape";
import Events from "../pages/Events";
import EventsDetails from "../pages/EventsDetails";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Box from "@mui/material/Box";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <ScrollToTop />
            <Box sx={{ marginTop: { lg: "50px", md: "50px", xs: "30px" } }}>
                <Routes>
                    <Route path={RouterPath.automotive} element={<Automotive />} />
                    <Route path={RouterPath.landscape} element={<Landscape />} />
                    <Route path={RouterPath.events} element={<Events />} />
                    <Route path={`${RouterPath.eventsDetails}/:id`} element={<EventsDetails />} />
                </Routes>
            </Box>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
