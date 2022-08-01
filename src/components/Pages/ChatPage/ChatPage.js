import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ChatBox from './ChatBox';
import MyChat from './MyChat';
import SideDrawer from './SideDrawer';


const ChatPage = () => {

    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        const data = await axios.get(`http://localhost:3001/api/chat`);
        setChats(data.data);
    }
    useEffect(() => {
        fetchChats();
    }, [])
    return (
        <div>

            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <div className='grid grid-cols-3'>
                        <div className=''>
                            <MyChat chats={chats}></MyChat>
                        </div>
                        <div className='col-span-2'>
                            <ChatBox></ChatBox>
                        </div>
                    </div>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li className='text-center'>Search User</li>

                        <div className=' flex'>
                            <input className='border-white-100 border-2 w-[70%]' type="text" placeholder='search' />
                            <span className='btn-sm btn'> go</span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;