import { useProvider } from "../context";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouterPath, SliderType } from "../router/RouterPath";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { DataProps } from "../interface";
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from '@mui/icons-material/Close';

const ImageSlideShow = () => {
    const { automotive, landscape, eventsDetails } = useProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const [type, setType] = useState<string>(SliderType.automotive);
    const [index, setIndex] = useState<number>(0);
    const [slideShowList, setSlideShowList] = useState<DataProps[]>([]);
    const [imageURL, setImageURL] = useState<DataProps>();

    useEffect(() => {
        const id = location.pathname.split("/");
        if (id?.length === 4) {
            const events = Object.keys(eventsDetails ?? {});
            let slideShowList: DataProps[] = [];
            const type = [
                ...events,
                SliderType.automotive,
                SliderType.landscape,
            ].includes(id[2] as SliderType)
                ? id[2]
                : SliderType.automotive;
            let index = +id[3];
            if (type === SliderType.automotive) {
                slideShowList = automotive ?? [];
            } else if (type === SliderType.landscape) {
                slideShowList = [
                    ...(landscape?.rowOne ?? []),
                    ...(landscape?.rowTwo ?? []),
                    ...(landscape?.rowThree ?? []),
                ];
            } else {
                if (eventsDetails && eventsDetails?.[type]?.length === 0) {
                    navigate(`${RouterPath.slideShow}/${SliderType.automotive}/0`, {
                        replace: true,
                    });
                }
                slideShowList = eventsDetails?.[type] ?? [];
            }
            setType(type);
            setIndex(index);
            setSlideShowList(slideShowList);
            setImageURL(slideShowList?.[index]);
        } else {
            navigate(`${RouterPath.slideShow}/${SliderType.automotive}/0`, {
                replace: true,
            });
        }
    }, [automotive, eventsDetails, landscape, location.pathname, navigate]);

    const disableRightClick = useCallback(
        (event: React.MouseEvent<HTMLImageElement>) => {
            event.preventDefault();
        },
        []
    );

    const handlePrev = useCallback(() => {
        const id = index === 0 ? (slideShowList ?? [])?.length - 1 : index - 1;
        navigate(`${RouterPath.slideShow}/${type}/${id}`, { replace: true });
    }, [index, navigate, slideShowList, type]);

    const handleNext = useCallback(() => {
        const id = index + 1 > (slideShowList ?? [])?.length - 1 ? 0 : index + 1;
        navigate(`${RouterPath.slideShow}/${type}/${id}`, { replace: true });
    }, [index, navigate, slideShowList, type]);

    const handleClose = useCallback(() => {
        navigate(-1)
    }, [navigate]);

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: '30px' }}>
                <CloseIcon onClick={handleClose} />
            </Box>
            <Grid container spacing={0} className="d-flex align-center justify-content-center">
                <Grid item xs={0.5} lg={2} md={2}></Grid>
                <Grid
                    item
                    xs={11}
                    lg={8}
                    md={8}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Stack spacing={2}>
                        {imageURL?.isVideo ? (
                            <>
                                <CardMedia
                                    autoPlay
                                    muted
                                    loop
                                    controls
                                    component="video"
                                    src={imageURL?.image}
                                    sx={{ height: "800px" }}
                                />
                            </>
                        ) : (
                            <img
                                src={imageURL?.image}
                                width="auto"
                                height="800px"
                                alt={imageURL?.alt}
                                onContextMenu={disableRightClick}
                                draggable="false"
                            />
                        )}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography sx={{ cursor: "pointer" }} onClick={handlePrev}>
                                Prev
                            </Typography>
                            <Typography sx={{ margin: "0px 5px" }}>/</Typography>
                            <Typography sx={{ cursor: "pointer" }} onClick={handleNext}>
                                Next
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={0.5} lg={2} md={2}></Grid>
            </Grid>
        </>
    );
};

export default ImageSlideShow;
