import axios from 'axios';
import React, { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { io } from 'socket.io-client';
import auth from '../../../firebase.init';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import ChatContainer from './ChatContainer';
import MyChat from './MyChat';
import SingleChatWIndow from './SingleChatWIndow';


// /const socket = io.connect("http://localhost:3001");

const ChatPage = () => {
    const socket = useRef()
    const userStore = useContext(UserStore);

    const currentUser = userStore.user;
    const [allUser, setAllUser] = useState([]);
    const [currentChat, setCurrentChat] = useState('');

    useEffect(() => {
        if (currentUser) {
            socket.current = io(`http://localhost:3001`)
            socket.current.emit("add-user", currentUser._id);
        }
    })


    // fetch all user data
    const fetchChats = async () => {
        const data = await axios.get(`http://localhost:3001/user`);
        setAllUser(data.data);
    }
    useEffect(() => {
        fetchChats();
    }, [])


    return (
        <div>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <div className='grid lg:grid-cols-3  py-1 chat-background'>
                        <div className=''>
                            <MyChat userStore={userStore} setCurrentChat={setCurrentChat} allUser={allUser}></MyChat>
                        </div>
                        <div className='col-span-2'>
                            {/* <SingleChatWIndow chatId={chatId} socket={socket}></SingleChatWIndow> */}
                            <ChatContainer
                                currentChat={currentChat}
                                socket={socket}
                            ></ChatContainer>
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