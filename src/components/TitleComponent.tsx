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
                        lg: "0px 0px 20px 0px",
                        md: "0px 0px 20px 0px",
                        xs: "0px 0px 10px 0px",
                    },
                    display: { xs: 'flex' },
                    color: '#807D7E',
                    justifyContent: { xs: 'center', lg: 'flex-start' },
                    fontSize: { lg: "32px", md: "22px", xs: "12px" },
                }}
            >
                {title}
            </Typography>
        </>
    );
};

export default TitleComponent;
