import axios from 'axios';
import React, { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import ChatContainer from './ChatContainer';
import MyChat from './MyChat';
import SingleProfile from './SingleProfile';


// /const socket = io.connect("http://localhost:3001");

const ChatPage = () => {
    const socket = useRef()
    const userStore = useContext(UserStore);

    const currentUser = userStore.user;
    const [allUser, setAllUser] = useState([]);
    const [currentChat, setCurrentChat] = useState('');
    const [search, setSearch] = useState('');

    const [searchResult, setSearchResult] = useState('');

    console.log(searchResult);


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


    const handelSearch = () => {


        const fetchChats = async () => {
            const data = await axios.get(`http://localhost:3001/user/search-user?search=${search}`);
            setSearchResult(data.data);
        }
        fetchChats();
        setSearchResult("");

    }

    return (
        <div>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <div className='grid lg:grid-cols-3  py-1 chat-background'>
                        <div className=''>
                            <MyChat userStore={userStore} setCurrentChat={setCurrentChat} allUser={allUser}></MyChat>
                        </div>
                        <div className='lg:col-span-2'>
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
                    <ul class="menu p-4 overflow-y-auto lg:w-[35%] w-[70%] bg-base-100 text-base-content">
                        <li className='text-center p-2 font-bold'>Search User</li>

                        <div className=' flex items-center'>
                            <input
                                type="text"
                                className='my-border p-2 m-2 w-[70%]'
                                placeholder=' search'
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && handelSearch();
                                }}
                            />
                            <span onClick={handelSearch} className='btn-sm btn'> go</span>
                        </div>

                        <div>
                            {
                                searchResult !== '' && searchResult?.map((chat) => <SingleProfile
                                    setCurrentChat={setCurrentChat}
                                    chat={chat} />)
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;