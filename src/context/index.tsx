import axios from 'axios';
import { ReactNode, createContext, useMemo, useContext, useCallback, useEffect, useState } from 'react';
import { DataProps } from '../interface';

interface EventsDetails {
    [eventName: string]: DataProps[];
}

interface ProviderType {
    automotive?: DataProps[];
    events?: DataProps[];
    eventsDetails?: EventsDetails;
    landscape?: EventsDetails;
};

interface ProviderContextType {
    children: ReactNode;
}

const MyContext = createContext({} as ProviderType);

export const Provider = ({ children }: ProviderContextType) => {

    const [events, setEvents] = useState<DataProps[]>();
    const [eventsDetails, setEventsDetails] = useState<EventsDetails>();
    const [automotive, setAutomotive] = useState<DataProps[]>();
    const [landscape, setLandscape] = useState<EventsDetails>();

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("https://studiobee.s3.ap-south-1.amazonaws.com/data.json");
            const data = response?.data as ProviderType;
            setEvents(data?.events ?? []);
            setEventsDetails(data?.eventsDetails);
            setAutomotive(data?.automotive);
            setLandscape(data?.landscape);
        } catch (error) {
            console.log("error", error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const value = useMemo(() => {
        return {
            events,
            eventsDetails,
            automotive,
            landscape
        }
    }, [events, eventsDetails, automotive, landscape]);

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export const useProvider = () => {
    return useContext(MyContext)
};
