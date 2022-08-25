import React from 'react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Loading from '../../Shared/Loading';
import SingleChatModal from './SingleChatModal';

const SingleProfile = ({ chat, setCurrentChat }) => {

    const [chatModalId, setChatModalId] = useState('');

    const singleUserSelect = (chat) => {

        if (!chat.email) {
            return <Loading></Loading>
        }
        setCurrentChat(chat);
        setChatModalId(chat);
    }

    return (
        <div for="my-modal-3" className=' '>
            < div className='my-2 lg:flex justify-between rounded my-border bg-sky-50 hover:bg-sky-100'>

                <div className='flex justify-start'>
                    <div class="avatar p-2">
                        <div class="w-[50px] rounded-full">
                            {/* <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" /> */}
                            <FaUserCircle className='text-4xl mr-2 cursor-pointer' />

                        </div>
                    </div>
                    <div className='mx-2 my-auto'>
                        <h2 className='py-0'>  {chat.email}</h2>
                        <p className='font-bold text-sm' >{chat?.username ? chat?.username : "UserName"} :
                            <span className='font-normal'>last message</span> </p>
                    </div>
                </div>

                <div className='lg:mx-2 my-auto'>

                    {/* <label for="my-modal-3" class=" btn btn-sm btn-primary modal-button"> Add </label> */}
                    <label onClick={() => singleUserSelect(chat)} class="focus:outline-none btn btn-sm text-white border-0 bg-sky-500 hover:bg-sky-400 outline-none modal-button"> Message </label>

                </div>

            </div >

            {/* modal for join chat start*/}
            {/* <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <SingleChatModal chatModalId={chatModalId} chat={chat}></SingleChatModal>
                </div>
            </div> */}
            {/* modal for join chat end*/}

        </div >
    );
};

export default SingleProfile;