import Grid from "@mui/material/Grid";
import GridComponent from "../components/GridComponent";
import { useProvider } from "../context";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const EventsDetails = () => {
    const { eventsDetails } = useProvider();
    const location = useLocation();

    const eventsData = useMemo(() => {
        const id = location.pathname.split("/");
        if (eventsDetails && id?.length === 3) {
            return eventsDetails[id[2]];
        }
        return []
    }, [eventsDetails, location.pathname]);


    return (
        <Grid container spacing={0} className="d-flex">
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <GridComponent data={eventsData} />
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
};

export default EventsDetails;