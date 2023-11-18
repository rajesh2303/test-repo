import Box from "@mui/material/Box";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid";
import { DataProps } from "../interface";
import { Container, Typography } from "@mui/material";

const Data: DataProps[] = [
    {
        image: require("../asset/frames/img1.jpeg"),
        alt: "benz",
    },
    {
        image: require("../asset/frames/img2.jpeg"),
        alt: "benz",
    },
    {
        image: require("../asset/frames/img3.jpeg"),
        alt: "benz",
    },
    {
        image: require("../asset/frames/img4.jpeg"),
        alt: "benz",
    },
];
const Frames = () => {
    return (
        <>
            <TitleComponent title={"Frames"} />
            <Container maxWidth="xl">
                <Grid container spacing={5} columns={{ lg: 12, md: 12, xs: 4 }} className="d-flex align-items-center">
                    {Data.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            sx={{ width: "100%", height: "auto", display: 'flex', justifyContent: 'center' }}
                        >
                            {item.image !== "" && (
                                <img
                                    src={item.image}
                                    style={{
                                        maxWidth: "100%",
                                        width: '446px',
                                        maxHeight: "100%",
                                        height: '446px',
                                    }}
                                    alt={item.alt}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Frames;
