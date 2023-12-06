import GridComponent from "../components/GridComponent";
import Grid from "@mui/material/Grid";
import { useProvider } from "../context";
import { RouterPath, SliderType } from "../router/RouterPath";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Landscape = () => {
    const { landscape } = useProvider();
    const navigate = useNavigate();

    const handleSlideShow = useCallback(
        (index: number) => {
            navigate(`${RouterPath.slideShow}/${SliderType.landscape}/${index}`);
        },
        [navigate]
    );

    return (
        <>
            <Grid container spacing={1} className="d-flex">
                <Grid item xs={1}></Grid>
                <Grid item xs={3.33}>
                    <GridComponent data={landscape?.['rowOne'] ?? []} handleSlideShow={handleSlideShow} />
                </Grid>
                <Grid item xs={3.33}>
                    <GridComponent data={landscape?.['rowTwo'] ?? []} handleSlideShow={(index: number) => { handleSlideShow(index + (landscape?.['rowOne'] ?? [])?.length); }} />
                </Grid>
                <Grid item xs={3.33}>
                    <GridComponent data={landscape?.['rowThree'] ?? []} handleSlideShow={(index: number) => { handleSlideShow(index + ((landscape?.['rowOne'] ?? [])?.length) + (landscape?.['rowTwo'] ?? [])?.length); }} />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </>

    );
};

export default Landscape;
