import React from 'react';
import SingleChatPage from './SingleChatPage';

const SingleProfile = ({ chat }) => {
    console.log(chat)
    return (
        <div for="my-modal-3" className=' '>
            < div className='my-2 p-2 flex justify-start border-b-2 rounded bg-red-200' >
                <div class="avatar">
                    <div class="w-[80px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>

                <div className='mx-2 my-auto'>
                    <h2 className='py-0'>  {chat._id}</h2>
                    <p className='font-bold text-sm' >{chat?.username ? chat?.username : "UserName"} :
                        <span className='font-normal'>last message</span> </p>
                </div>

                <div className='mx-2 my-auto'>
                    <button>
                        <label for="my-modal-3" class=" btn btn-sm btn-primary modal-button"> Add </label>
                    </button>

                </div>



            </div >

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <SingleChatPage chat={chat}></SingleChatPage>
                </div>
            </div>
        </div >
    );
};

export default SingleProfile;