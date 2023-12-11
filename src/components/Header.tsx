import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RouterPath } from "../router/RouterPath";
import { useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Headroom from "react-headroom";
import { Images } from "../asset";
import "../css/Header.css";

const HeaderList = [
  { name: "Automotive", url: RouterPath.automotive },
  { name: "Landscape", url: RouterPath.landscape },
  { name: "Events", url: RouterPath.events },
  { name: "Store", url: RouterPath.automotive, isInActive: true },
];

interface HeaderItemProps {
  data: { name: string; url: string; isInActive?: boolean };
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
    <>
      {data?.isInActive ? (
        <Typography className={"in-active pr-40"}>{data.name}</Typography>
      ) : (
        <Typography
          sx={{ cursor: "pointer" }}
          className={`${data.url === activeTab ? "active" : "in-active"} pr-40`}
          onClick={onClick}
        >
          {data.name}
        </Typography>
      )}
    </>
  );
};

  

const Header = () => {
  return (
    <Headroom>
      <Box
        className="d-flex justify-content-end align-items-center"
        sx={{
          height: "80px",
          borderBottom: "1px solid #BEBCBD",
          backgroundColor: "#99e0a4",
        }}
      >
        <Grid container spacing={0} className="d-flex align-items-center">
          <Grid item xs={6}>
            <Box className="d-flex align-items-center logo-padding">
              <img
                style={{ width: "190px" }}
                src={Images.logo}
                alt="studiobee"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="d-flex justify-content-end align-items-center">
              <Box className="mobile-hide align-center">
                {HeaderList.map((item) => (
                  <HeaderItem key={item.name} data={item} />
                ))}
              </Box>
              <Box>
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Headroom>
  );
};

export default Header;
