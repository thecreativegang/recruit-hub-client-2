import React, { useEffect, useState } from 'react';

import SingleProfile from './SingleProfile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import ScrollToBottom from 'react-scroll-to-bottom';
import Loading from '../../Shared/Loading';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const MyChat = () => {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [globalUser] = useAuthState(auth);

    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const data = await axios.get(`http://localhost:3001/user`);
        setChats(data.data);
    }
    useEffect(() => {
        fetchChats();
    }, []);
    console.log(chats);

    // if (chats) {
    //     return <Loading></Loading>
    // }

    // console.log(globalUser);

    // setCurrentUser(globalUser?.email);

    return (
        <div className='mx-2'>
            <div className='flex justify-between  bg-red-200'>

                <h2 className='text-3xl px-2 my-1'>My chats</h2>

                <div class="drawer-content text-right text-black">
                    <label for="my-drawer" class="m-2 btn-sm btn lg:btn-primary"> <FontAwesomeIcon icon={faSearch} /> <span className='text-white px-2'> Search Chat</span>
                    </label>
                </div>

            </div>


            <div className='p-2 my-1  h-[80vh]  rounded bg-slate-300'>

                <div className='bg-primary rounded p-2 my-2 text-white'>L :  {currentUser}</div>

                <ScrollToBottom className='profile-container'>
                    {chats?.map((chat) => <SingleProfile chat={chat} />)
                    }
                </ScrollToBottom>
            </div>

        </div>
    );
};

export default MyChat;