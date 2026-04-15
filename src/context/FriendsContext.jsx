import React, {createContext, useState} from 'react';
import {toast} from "react-toastify";

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

        setCommunication([...communication, data]);

    }

    const data = {
        communication,
        setCommunication,
        handleCommunication,
    }
    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>;
};

export default FriendsProvider;