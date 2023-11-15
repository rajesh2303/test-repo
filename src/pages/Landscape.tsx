import { DataProps } from "../interface";
import GridComponent from "../components/GridComponent";

const Data: DataProps[] = [
    {
        image: "",
        alt: "",
        grid: 1,
    },
    {
        image: require("../asset/landscape/img1.jpeg"),
        alt: "benz",
        grid: 5,
    },
    {
        image: require("../asset/landscape/img2.jpeg"),
        alt: "benz",
        grid: 5,
    },
    {
        image: "",
        alt: "",
        grid: 1,
    },
    {
        image: require("../asset/landscape/img3.jpeg"),
        alt: "benz",
        grid: 12,
    },
    {
        image: "",
        alt: "",
        grid: 1,
    },
    {
        image: require("../asset/landscape/img4.jpeg"),
        alt: "benz",
        grid: 5,
    }
];
const Landscape = () => {
    return (
        <>
            <GridComponent data={Data} title={"Landscape"} />
        </>
    );
};

export default Landscape;
