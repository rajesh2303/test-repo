import GridComponent from "../components/GridComponent";
import Grid from "@mui/material/Grid";
import { useProvider } from "../context";


const Landscape = () => {
    const { landscape } = useProvider();

    return (
        <>
            <Grid container spacing={1} className="d-flex">
                <Grid item xs={1}></Grid>
                <Grid item xs={3.33}>
                    <GridComponent data={landscape?.['rowOne'] ?? []} />
                </Grid>
                <Grid item xs={3.33}>
                    <GridComponent data={landscape?.['rowTwo'] ?? []} />
                </Grid>
                <Grid item xs={3.33}>
                    <GridComponent data={landscape?.['rowThree'] ?? []} />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>

    );
};

export default Landscape;
