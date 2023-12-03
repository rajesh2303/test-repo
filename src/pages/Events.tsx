import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { useCallback } from "react";
import { useProvider } from "../context";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../router/RouterPath";

const Events = () => {

    const { events } = useProvider();
    const navigate = useNavigate();

    const disableRightClick = useCallback(
        (event: React.MouseEvent<HTMLImageElement>) => {
            event.preventDefault();
        },
        []
    );

    const handleClick = useCallback((id: string) => {
        navigate(`${RouterPath.eventsDetails}/${id}`)
    }, [navigate]);

    return (
        <>
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                    columns={{ lg: 12, md: 12, xs: 4 }}
                    className="d-flex align-items-center"
                >
                    {(events ?? [])?.map((item, index) => (
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
                                    draggable="false"
                                    onContextMenu={disableRightClick}
                                    onClick={() => handleClick(item?.detailsValue ?? "")}
                                />
                            )}
                            <Typography
                                sx={{
                                    paddingTop: { lg: "27px", md: "20px", xs: "15px" },
                                    fontFamily: "Rodest",
                                    fontSize: { lg: "22px", md: "20px", xs: "15px" },
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
