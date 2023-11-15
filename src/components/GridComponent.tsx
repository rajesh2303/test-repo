import Box from "@mui/material/Box";
import TitleComponent from "./TitleComponent";
import { Grid } from "@mui/material";
import { DataProps } from "../interface";

interface GridComponentProps {
    title: string;
    data: DataProps[];
}

const GridComponent = ({ title, data }: GridComponentProps) => {
    return (
        <>
            <TitleComponent title={title} />
            <Box sx={{ padding: "0px 10px" }}>
                <Grid container spacing={2} className="d-flex align-items-center">
                    {data.map((item, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            lg={item.grid}
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
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default GridComponent;
