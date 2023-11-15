import { DataProps } from "../interface";
import GridComponent from "../components/GridComponent";

const Data: DataProps[] = [
    {
        image: require("../asset/automotive/benz.jpeg"),
        alt: "benz",
        grid: 12,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: require("../asset/automotive/img2.jpeg"),
        alt: "benz",
        grid: 4,
    },
    {
        image: require("../asset/automotive/img3.jpeg"),
        alt: "benz",
        grid: 4,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: require("../asset/automotive/img4.jpeg"),
        alt: "benz",
        grid: 2.5,
    },
    {
        image: require("../asset/automotive/img5.jpeg"),
        alt: "benz",
        grid: 2.5,
    },
    {
        image: require("../asset/automotive/img6.jpeg"),
        alt: "benz",
        grid: 3,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: require("../asset/automotive/img7.jpeg"),
        alt: "benz",
        grid: 12,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: require("../asset/automotive/img8.jpeg"),
        alt: "benz",
        grid: 5,
    },
    {
        image: require("../asset/automotive/img11.jpeg"),
        alt: "benz",
        grid: 3,
        height: '405px',
        width: '100%'
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
    {
        image: require("../asset/automotive/img9.jpeg"),
        alt: "benz",
        grid: 3,
        height: '436px',
        width: '100%'
    },
    {
        image: require("../asset/automotive/img10.jpeg"),
        alt: "benz",
        grid: 5,
    },
    {
        image: "",
        alt: "",
        grid: 2,
    },
];
const Automotive = () => {
    return (
        <>
            <GridComponent data={Data} />
        </>
    );
};

export default Automotive;
