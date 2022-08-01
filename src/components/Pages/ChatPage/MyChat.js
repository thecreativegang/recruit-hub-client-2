import React from 'react';

import SingleProfile from './SingleProfile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const MyChat = ({ chats }) => {
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

            <div className='p-2 my-1  h-[90vh]  rounded bg-slate-300'>
                <div className='bg-primary rounded p-2 my-2 text-white'>Login user</div>

                {
                    chats?.map((chat) => <SingleProfile chat={chat}></SingleProfile>)
                }
            </div>

        </div>
    );
};

export default MyChat;