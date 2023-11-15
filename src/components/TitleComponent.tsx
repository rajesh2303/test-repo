import Typography from "@mui/material/Typography";

interface TitleComponentProps {
    title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
    return (
        <>
            <Typography className={'title'}>{title}</Typography>
        </>
    );
};

export default TitleComponent;
