import React from 'react';

import SingleProfile from './SingleProfile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import ScrollToBottom from 'react-scroll-to-bottom';
import Loading from '../../Shared/Loading';

const MyChat = ({ chats }) => {

    console.log(chats)
    if (!chats) {
        <Loading></Loading>
    }

    return (
        <div className='mx-2'>
            <div className='flex justify-between  bg-red-200'>

                <h2 className='text-3xl px-2 my-1'>My chats</h2>
                <span class="m-2 btn-sm btn lg:btn-primary">
                    <span className='text-white px-2'> New Group Chat
                        <span className='mx-1'>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </span>
                    </span>
                </span>

            </div>


            <div className='p-2 my-1  h-[80vh]  rounded bg-slate-300'>
                <div className='bg-primary rounded p-2 my-2 text-white'>Login user name here</div>
                <ScrollToBottom className='profile-container'>
                    {chats?.map((chat) => <SingleProfile chat={chat} />)
                    }
                </ScrollToBottom>
            </div>

        </div>
    );
};

export default MyChat;