import React from 'react';
import SingleProfile from './SingleProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ScrollToBottom from 'react-scroll-to-bottom';
import Loading from '../../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import { FaUserCircle } from 'react-icons/fa';

const MyChat = ({ allUser, userStore, setCurrentChat }) => {
    const { userEmail, user } = userStore;


    if (!allUser) {
        <Loading></Loading>
    }


    return (
        <div className='lg:mx-2'>
            <div className='flex justify-between  my-border rounded'>

                <h2 className='text-3xl lg:px-2 mt-1 font-bold '>My Chats</h2>

                <div class="drawer-content text-right text-black">
                    <label for="my-drawer" class="m-2 btn-sm btn my-border hover:bg-sky-400  bg-sky-500 text-white">
                        <FontAwesomeIcon icon={faSearch} /> <span className=' px-2'> Search Chat</span>
                    </label>
                </div>

            </div>


            <div className='lg:px-2 mt-1  h-[92vh]  rounded my-border'>
                <div className='bg-sky-500 rounded p-2 my-2 text-white flex items-center justify-between'>
                    <h2 className='px-3 text-2xl'>
                        User Name: {user?.username ? user?.username : user?.email}
                    </h2>
                    <div class="avatar">
                        <div class="w-[50px] rounded-full">
                            {/* <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" /> */}
                            <FaUserCircle className='text-4xl mr-2 cursor-pointer' />

                        </div>
                    </div>
                </div>

                <ScrollToBottom className='profile-container pb-2'>
                    {allUser?.map((chat) => <SingleProfile setCurrentChat={setCurrentChat} chat={chat} />)
                    }
                </ScrollToBottom>
            </div>

        </div>
    );
};

export default MyChat;