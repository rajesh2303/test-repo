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
            <Box>
                {prev && (
                    <Box sx={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }} onClick={onClickPrev}>
                        <ArrowBackIosNewIcon
                            sx={{ fontSize: "30px", paddingRight: { lg: "10px", xs: "3px" } }}
                        />
                        <Typography sx={{ fontSize: { lg: '22px', xs: '12px' } }} className="next-prev">{prev?.title}</Typography>
                    </Box>
                )}
            </Box>
            <Box>
                {next && (
                    <Box sx={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }} onClick={onClickNext}>
                        <Typography sx={{ fontSize: { lg: '22px', xs: '12px' } }} className="next-prev">{next?.title}</Typography>
                        <ArrowForwardIosIcon
                            sx={{ fontSize: "30px", paddingLeft: { lg: "10px", xs: "3px" } }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default PreviewComponent;
