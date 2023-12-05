import { Grid } from "@mui/material";
import { useProvider } from "../context";
import ImageComponent from "../components/ImageComponent";


const Automotive = () => {

    const { automotive } = useProvider();

    return (
        <Grid container spacing={0} className="d-flex">
            <Grid item xs={0.5} lg={1} md={1}></Grid>
            <Grid item xs={11} lg={10} md={10}>
                <ImageComponent data={automotive ?? []} isMobileFullScreen={true} />
            </Grid>
            <Grid item xs={0.5} lg={1} md={1}></Grid>
        </Grid>
    );
};

export default Automotive;
