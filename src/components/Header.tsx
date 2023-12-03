import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RouterPath } from "../router/RouterPath";
import { useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";

const HeaderList = [
    { name: "Automotive", url: RouterPath.automotive },
    { name: "Landscape", url: RouterPath.landscape },
    { name: "Events", url: RouterPath.events }
];

interface HeaderItemProps {
    data: { name: string; url: string };
}

const HeaderItem = ({ data }: HeaderItemProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = useCallback(() => {
        navigate(data.url);
    }, [data, navigate]);

    const activeTab = useMemo(() => {
        return location.pathname;
    }, [location]);

    return (
        <Typography
            sx={{ cursor: "pointer" }}
            className={`${data.url === activeTab ? "active" : "in-active"} pr-40`}
            onClick={onClick}
        >
            {data.name}
        </Typography>
    );
};

const Header = () => {
    return (
        <Box
            className="d-flex justify-content-end align-items-center"
            sx={{
                height: "80px",
                borderBottom: "1px solid #BEBCBD",
                marginBottom: "50px",
                backgroundColor: '#99e0a4'
            }}
        >
            <Grid container spacing={0} className="d-flex align-items-center">
                <Grid item xs={6}>
                    <Box style={{ paddingLeft: '100px' }} className="d-flex align-items-center">
                        <img
                            style={{ width: "190px" }}
                            src={require("../asset/logo.jpg")}
                            alt=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        className="d-flex justify-content-end align-items-center"
                    >
                        <Box className="d-flex align-items-center">
                            {HeaderList.map((item) => (
                                <HeaderItem key={item.name} data={item} />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;
