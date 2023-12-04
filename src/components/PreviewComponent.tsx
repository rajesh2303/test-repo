import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { DataProps } from "../interface";
import { useCallback } from "react";

interface PreviewComponentProps {
    next?: DataProps;
    prev?: DataProps;
    handleNext: (data?: DataProps) => void;
    handlePrev: (data?: DataProps) => void;
};

const PreviewComponent = ({ next, prev, handleNext, handlePrev }: PreviewComponentProps) => {

    const onClickNext = useCallback(() => {
        handleNext(next);
    }, [handleNext, next]);

    const onClickPrev = useCallback(() => {
        handlePrev(prev);
    }, [handlePrev, prev]);

    return (
        <Box
            className="d-flex justify-content-between"
            style={{ marginTop: "100px" }}
        >
            <Typography className="next-prev">
                {prev && (
                    <Box sx={{ cursor: 'pointer' }} onClick={onClickPrev}>
                        <ArrowBackIosNewIcon
                            sx={{ fontSize: "30px", paddingRight: "10px" }}
                        />
                        {prev?.title}
                    </Box>
                )}
            </Typography>
            <Typography className="next-prev">
                {next && (
                    <Box sx={{ cursor: 'pointer' }} onClick={onClickNext}>
                        {next?.title}
                        <ArrowForwardIosIcon
                            sx={{ fontSize: "30px", paddingLeft: "10px" }}
                        />
                    </Box>
                )}
            </Typography>
        </Box>
    );
};

export default PreviewComponent;
