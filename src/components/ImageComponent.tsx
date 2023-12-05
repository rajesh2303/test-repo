import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { DataProps } from "../interface";
import CardMedia from "@mui/material/CardMedia";
import { ScreenResolution, useResolution } from "../context/ResponsiveContext";
import { useCallback, useMemo } from "react";

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
        src: `${image}?fit=crop&auto=format`, // w=${size * cols}&h=${size * rows}&
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
};

interface ImageComponentProps {
    data: DataProps[];
    isMobileFullScreen?: boolean
}

const ImageComponent = ({ data, isMobileFullScreen }: ImageComponentProps) => {

    const { screenResolution } = useResolution();
    const { gap } = useMemo(() => {
        if (screenResolution === ScreenResolution.xs) {
            return {
                gap: 4
            }
        }
        return {
            gap: 8
        }
    }, [screenResolution]);

    const disableRightClick = useCallback((event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
    }, []);

    return (
        <ImageList variant="quilted" cols={12} gap={gap}>
            {data.map((item) => (
                <ImageListItem
                    key={item.image}
                    cols={(isMobileFullScreen && screenResolution === ScreenResolution.xs) ? 12 : item?.grid}
                    rows={item?.rows || 1}
                >
                    {item.isVideo ? (
                        <>
                            <CardMedia
                                autoPlay
                                muted
                                loop
                                controls
                                component="video"
                                src={item.image}
                            />
                        </>
                    ) : (
                        <img
                            {...srcset(item.image, 121, item?.rows, item.grid)}
                            alt={item.alt}
                            loading="lazy"
                            onContextMenu={disableRightClick}
                            draggable="false"
                        />
                    )}
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default ImageComponent;
