import Box from "@mui/material/Box";
import TitleComponent from "../components/TitleComponent";
import Grid from "@mui/material/Grid";
import { DataProps } from "../interface";
import { Container, Typography } from "@mui/material";

const Data: DataProps[] = [
    {
        name: "Jaynika’s First Birthday",
        image: require("../asset/events/img1.jpeg"),
        alt: "benz",
    },
    {
        name: "Shurthi’s Baby shower",
        image: require("../asset/events/img2.jpeg"),
        alt: "benz",
    },
    {
        name: "Padmaja’s Baby Shower",
        image: require("../asset/events/img3.jpeg"),
        alt: "benz",
    },
    {
        name: "Karthick & vinithav",
        image: require("../asset/events/img4.jpeg"),
        alt: "benz",
    },
];
const Events = () => {
    return (
        <>
            <TitleComponent title={"Events"} />
            <Container maxWidth="xl">
                <Grid container spacing={3} columns={{ lg: 12, md: 12, xs: 4 }} className="d-flex align-items-center">
                    {Data.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            sx={{ width: "100%", height: "auto" }}
                        >
                            {item.image !== "" && (
                                <img
                                    src={item.image}
                                    style={{
                                        maxWidth: "100%",
                                        width: item?.width,
                                        maxHeight: "100%",
                                        height: item?.height,
                                    }}
                                    alt={item.alt}
                                />
                            )}
                            <Typography
                                sx={{
                                    paddingTop: { lg: "27px", md: '20px', xs: '15px' },
                                    fontFamily: "Rodest",
                                    fontSize: { lg: "22px", md: '20px', xs: '15px' },
                                    fontWeight: 600,
                                }}
                                align="center"
                            >
                                {item?.name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Events;
