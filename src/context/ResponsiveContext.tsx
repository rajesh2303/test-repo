import { useMediaQuery } from '@mui/material';
import { ReactNode, createContext, useMemo, useContext } from 'react';


export enum ScreenResolution {
    xs = 'xs',
    md = 'md',
    lg = 'lg'
}

interface ProviderType {
    screenResolution: ScreenResolution
};

interface ResponsiveContextType {
    children: ReactNode;
}

const ResponsiveContext = createContext({ screenResolution: 'lg' } as ProviderType);

export const Responsive = ({ children }: ResponsiveContextType) => {

    const isExtraSmall = useMediaQuery('(max-width: 600px)');
    const isSmall = useMediaQuery('(min-width: 601px) and (max-width: 960px)');
    const isMedium = useMediaQuery('(min-width: 961px) and (max-width: 1280px)');
    const isLarge = useMediaQuery('(min-width: 1281px) and (max-width: 1920px)');
    const isExtraLarge = useMediaQuery('(min-width: 1921px)');

    const screenResolution = useMemo(() => {
        if (isExtraSmall || isSmall) {
            return ScreenResolution.xs;
        } else if (isMedium) {
            return ScreenResolution.md;
        } else if (isLarge || isExtraLarge) {
            return ScreenResolution.lg;
        }
        return ScreenResolution.lg;
    }, [isExtraLarge, isExtraSmall, isLarge, isMedium, isSmall])

    const value = useMemo(() => {
        return {
            screenResolution
        }
    }, [screenResolution]);
    return (
        <ResponsiveContext.Provider value={value}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResolution = () => {
    return useContext(ResponsiveContext)
};
