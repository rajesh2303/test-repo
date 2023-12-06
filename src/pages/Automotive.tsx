import { Grid } from "@mui/material";
import { useProvider } from "../context";
import ImageComponent from "../components/ImageComponent";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath, SliderType } from "../router/RouterPath";

const Automotive = () => {
    const { automotive } = useProvider();
    const navigate = useNavigate();

    const handleSlideShow = useCallback(
        (index: number) => {
            navigate(`${RouterPath.slideShow}/${SliderType.automotive}/${index}`);
        },
        [navigate]
    );

    return (
        <Grid container spacing={0} className="d-flex">
            <Grid item xs={0.5} lg={1} md={1}></Grid>
            <Grid item xs={11} lg={10} md={10}>
                <ImageComponent
                    data={automotive ?? []}
                    isMobileFullScreen={true}
                    handleSlideShow={handleSlideShow}
                />
            </Grid>
            <Grid item xs={0.5} lg={1} md={1}></Grid>
        </Grid>
    );
};

export default Automotive;
