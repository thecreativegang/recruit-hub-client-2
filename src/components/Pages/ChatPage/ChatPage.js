import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ChatPage = () => {

    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        const data = await axios.get(`http://localhost:5000/api/chat`);
        setChats(data.data);
    }
    useEffect(() => {
        fetchChats();
    }, [])
    console.log(chats)
    return (
        <div>
            {chats?.map((chat) => (
                <div>Name:  {chat?.chatName}</div>
            ))}
        </div>
    );
};

export default ChatPage;