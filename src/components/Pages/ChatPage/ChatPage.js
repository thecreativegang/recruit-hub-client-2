import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { UserStore } from '../../../stateManagement/UserContext/UserContextStore';
import Loading from '../../Shared/Loading';
import ChatContainer from './ChatContainer';
import MyChat from './MyChat';
import SingleProfile from './SingleProfile';
import { checkTokenExpired } from './../../../utilities/checkTokenExpired';
import { useNavigate } from 'react-router-dom';
import { serverLink } from './../../../utilities/links';




const ChatPage = () => {
    const socket = io.connect(serverLink);

    const navigate = useNavigate()
    const userStore = useContext(UserStore);
    const currentUser = userStore.user;
    const [allUser, setAllUser] = useState([]);
    const [allAdmin, setAllAdmin] = useState([]);
    const [currentChat, setCurrentChat] = useState('');
    const [search, setSearch] = useState('');

    const [searchResult, setSearchResult] = useState('');


    // Conection to soket io
    // useEffect(() => {
    //     if (currentUser) {
    //         socket.emit("add-user", currentUser._id);
    //     }
    // }, [currentUser])



    // fetch all user data
    const fetchChats = async () => {
        await axios.get(`${serverLink}/user`, {}, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }
        )
            .then(function (res) {
                setAllUser(res?.data);
            })
            .catch(function (err) {
                checkTokenExpired(err) === true && navigate('/login')
            })
    }
    useEffect(() => {
        fetchChats();
    }, [allUser])


    // fetch all admin data
    const fetchAdmin = async () => {
        await axios.get(`${serverLink}/user/admin`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        }
        )
            .then(function (res) {
                setAllAdmin(res?.data);
            })
            .catch(function (err) {
                checkTokenExpired(err) === true && navigate('/login')
            })
    }
    useEffect(() => {
        fetchAdmin();
    }, [allAdmin])


    const handelSearch = () => {
        const fetchChats = async () => {
            const data = await axios.get(`${serverLink}/user/search-user?search=${search}`, {}, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
                .then(function (res) {
                    setSearchResult(res?.data);
                })
                .catch(function (err) {
                    checkTokenExpired(err) === true && navigate('/login')
                })

        }
        fetchChats();
        setSearchResult("");
    }


    return (
        <div>
            <div class="drawer h-[calc(100vh-110px)]">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content ">
                    <div className='grid lg:grid-cols-3  py-1 chat-background ]'>
                        <div class="h-[calc(100vh-130px)] carousel carousel-vertical ">

                            <div className=''>
                                {
                                    <MyChat userStore={userStore} setCurrentChat={setCurrentChat} allAdmin={allAdmin} allUser={allUser}></MyChat>
                                }
                            </div>

                        </div>
                        {/* <div className=''>
                            <MyChat userStore={userStore} setCurrentChat={setCurrentChat} allUser={allUser}></MyChat>
                        </div> */}
                        <div className='lg:col-span-2'>
                            <ChatContainer
                                currentChat={currentChat}
                                currentUser={currentUser}
                                socket={socket}
                            ></ChatContainer>
                        </div>
                    </div>
                </div>

                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto lg:w-[30%] w-[90%] bg-base-100 text-base-content">
                        <li className='text-center p-2 font-bold'>Search User</li>

                        <div className='flex items-center'>
                            <input
                                type="text"
                                className='my-border p-1  mx-2 my-auto w-[70%]'
                                placeholder=' name or email'
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && handelSearch();
                                }}
                            />
                            <span onClick={handelSearch} className='btn-sm  btn my-auto'>Search</span>
                        </div>

                        <div>
                            {
                                searchResult ? "Search your Chat" ? searchResult?.map((chat) => <SingleProfile
                                    setCurrentChat={setCurrentChat}
                                    chat={chat} />) : <Loading></Loading> : <Loading></Loading>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;