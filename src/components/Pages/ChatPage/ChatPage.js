import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { io } from 'socket.io-client';
import auth from '../../../firebase.init';
import ChatBox from './ChatBox';
import MyChat from './MyChat';
import SingleChatWIndow from './SingleChatWIndow';

const socket = io.connect("http://localhost:3001");


const ChatPage = () => {

    const [chats, setChats] = useState([]);
    const [chatId, setChatId] = useState('');

    const fetchChats = async () => {
        const data = await axios.get(`http://localhost:3001/user`);
        setChats(data.data);
    }
    useEffect(() => {
        fetchChats();
    }, [])

    // const [globalUser] = useAuthState(auth);

    return (
        <div>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <div className='grid lg:grid-cols-3'>
                        <div className=''>
                            <MyChat setChatId={setChatId} chats={chats}></MyChat>
                        </div>
                        <div className='col-span-2'>
                            <SingleChatWIndow chatId={chatId} socket={socket}></SingleChatWIndow>

                            {/* <ChatBox chatId={chatId} socket={socket} /> */}
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