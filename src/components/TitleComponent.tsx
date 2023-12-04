import Typography from "@mui/material/Typography";

interface TitleComponentProps {
    title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
    return (
        <>
            <Typography
                sx={{
                    padding: {
                        lg: "20px 0px 20px 0px",
                        md: "10px 0px 10px 0px",
                        xs: "10px 0px",
                    },
                    display: { xs: 'flex' },
                    justifyContent: { xs: 'center', lg: 'flex-start' },
                    fontSize: { lg: "40px", md: "32px", xs: "20px" },
                }}
            >
                {title}
            </Typography>
        </>
    );
};

export default TitleComponent;