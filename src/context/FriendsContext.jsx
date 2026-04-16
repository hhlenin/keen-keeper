import React, {createContext, useState} from 'react';
import {toast} from "react-toastify";
import {setTimelineDataFromStorage} from "../util/localStorage.jsx";


export const FriendsContext = createContext();

const FriendsProvider = ({children}) => {

    const [communication, setCommunication] = useState([]);

    const handleCommunication = (friend, type) => {

        toast.success(`${type} with ${friend.name}`)
        const date = new Date();

        const data = {
            id: communication.length,
            type: type,
            friend_id: friend.id,
            name: friend.name,
            email: friend.email,
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
        }
        const newData = [...communication, data];

        setCommunication(newData);
        setTimelineDataFromStorage(newData);

    }
    const [timelineData, setTimelineData] = useState([]);

    const handleFilter = (type = null) => {
        if (type !== 'null') {
            setTimelineData( communication.filter(filter => filter.type === type));
            // return 0;
        } else {
            setTimelineData(communication)

        }
        console.log(timelineData);
    }

    const data = {
        communication,
        setCommunication,
        handleCommunication,
        timelineData,
        handleFilter,
    }
    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>;
};

export default FriendsProvider;