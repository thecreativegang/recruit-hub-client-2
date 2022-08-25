import React from 'react';
import SingleProfile from './SingleProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ScrollToBottom from 'react-scroll-to-bottom';
import Loading from '../../Shared/Loading';
import { FaUserCircle } from 'react-icons/fa';

const MyChat = ({ allUser, allAdmin, userStore, setCurrentChat }) => {
    const { userEmail, user } = userStore;

    console.log(allAdmin);
    return (
        <div className='lg:mx-2 pt-2'>
            {/* My chat header start*/}

            <div className='flex justify-between  my-border rounded'>
                <h2 className='text-3xl lg:px-2 mt-1 font-bold '>My Chats</h2>
                <div class="drawer-content text-right text-black">
                    <label for="my-drawer" class="m-2 btn-sm btn my-border hover:bg-sky-400  bg-sky-500 text-white">
                        <FontAwesomeIcon icon={faSearch} /> <span className=' px-2'> Search Chat</span>
                    </label>
                </div>

            </div>
            <div className='bg-sky-500 rounded p-2 my-2 text-white flex items-center justify-between'>
                <h2 className='px-3 text-2xl'>
                    User Name: {user?.username ? user?.username : user?.email}
                </h2>
                <div class="avatar">
                    <div class="w-[50px] rounded-full">
                        <FaUserCircle className='text-4xl mr-2 cursor-pointer' />
                    </div>
                </div>
            </div>
            {/*My chat header end*/}

            {/* admin chat list start*/}
            <div class="collapse collapse-arrow  my-border">
                <input type="checkbox" class="peer" />
                <div class="collapse-title text-primary font-2xl">
                    Admins
                </div>
                <div class="collapse-content px-1 peer-checked:bg-sky-200">
                    <div className='overflow-x-hidden   overflow-y-auto '>
                        {
                            allAdmin && allAdmin ? allAdmin?.map((chat) => <SingleProfile setCurrentChat={setCurrentChat} chat={chat} />) : <Loading></Loading>
                        }
                    </div>
                </div>
            </div>

            {/* admin chat list end*/}

            {/* useer */}
            <div className='overflow-x-hidden  overflow-y-auto '>
                {
                    allUser && allUser ? allUser?.map((chat) => <SingleProfile setCurrentChat={setCurrentChat} chat={chat} />) : <Loading></Loading>
                }
            </div>



            {/* user content */}

            {/* <div className='lg:px-2 mt-0  h-[calc(100vh-280px)]  rounded my-border'>
                <div className='bg-sky-500 rounded p-2 my-2 text-white flex items-center justify-between'>
                    <h2 className='px-3 text-2xl'>
                        User Name: {user?.username ? user?.username : user?.email}
                    </h2>
                    <div class="avatar">
                        <div class="w-[50px] rounded-full">
                            <FaUserCircle className='text-4xl mr-2 cursor-pointer' />
                        </div>
                    </div>
                </div>

                <div className='overflow-x-hidden  overflow-y-auto lg:h-[85%] md:h-[80%] '>
                    {
                        allUser ? allUser?.map((chat) => <SingleProfile setCurrentChat={setCurrentChat} chat={chat} />) : <Loading></Loading>
                    }
                </div>
            </div> */}

        </div>
    );
};

export default MyChat;