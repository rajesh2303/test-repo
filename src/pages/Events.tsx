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

  const handleClick = useCallback(
    (id: string) => {
      navigate(`${RouterPath.eventsDetails}/${id}`);
    },
    [navigate]
  );

    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
                <Grid
                    container
                    spacing={{ lg: 3, md: 3, xs: 2 }}
                    columns={{ xs: 12 }}
                    className="d-flex align-items-center"
                >
                    {(events ?? [])?.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={6}
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
                                    onClick={() => handleClick(item?.detailsKey ?? "")}
                                />
                            )}
                            <Typography
                                sx={{
                                    paddingTop: { lg: "27px", md: "20px", xs: "12px" },
                                    fontFamily: "Rodest",
                                    fontSize: { lg: "22px", md: "20px", xs: "12px" },
                                    fontWeight: 600,
                                }}
                                align="center"
                            >
                                {item?.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Events;
