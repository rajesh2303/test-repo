import GridComponent from "../components/GridComponent";
import Grid from "@mui/material/Grid";
import { useProvider } from "../context";


const Automotive = () => {

    const { automotive } = useProvider();

    return (
        <Grid container spacing={0} className="d-flex">
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <GridComponent data={automotive ?? []} />
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    );
};

export default Automotive;
