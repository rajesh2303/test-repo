import GridComponent from "../components/GridComponent";
import Grid from "@mui/material/Grid";
import { useProvider } from "../context";


const Automotive = () => {

    const { automotive } = useProvider();

    return (
        <Grid container spacing={0} className="d-flex">
            <Grid item xs={0.5} lg={1} md={1}></Grid>
            <Grid item xs={11} lg={10} md={10}>
                <GridComponent data={automotive ?? []} />
            </Grid>
            <Grid item xs={0.5} lg={1} md={1}></Grid>
        </Grid>
    );
};

export default Automotive;
