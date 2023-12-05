import { Grid } from "@mui/material";
import { DataProps } from "../interface";
import CardMedia from "@mui/material/CardMedia";
import { useCallback } from "react";

interface GridComponentProps {
    data: DataProps[];
}


const GridComponent = ({ data }: GridComponentProps) => {

    const disableRightClick = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
    }, []);

    return (
        <>
            <Grid container spacing={{ xs: 1, md: 2, lg: 2 }} className="d-flex">
                {data.map((item, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        lg={item.grid}
                        sx={{ width: "100%", position: "relative" }}
                    >
                        {item.isVideo ? (
                            <>
                                <CardMedia
                                    autoPlay
                                    muted
                                    loop
                                    controls
                                    component="video"
                                    src={item.image}
                                />
                            </>
                        ) : (
                            <>
                                {item.image !== "" && (
                                    <img
                                        src={item.image}
                                        style={{
                                            maxWidth: "100%",
                                            width: item?.width,
                                            maxHeight: "100%",
                                            height: item?.height
                                        }}
                                        alt={item.alt}
                                        onContextMenu={disableRightClick}
                                        draggable="false"
                                    />
                                )}
                            </>
                        )}
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default GridComponent;
