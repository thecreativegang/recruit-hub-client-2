import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import MyChat from './MyChat';
import SingleChatWIndow from './SingleChatWIndow';

const socket = io.connect("http://localhost:3001");


const ChatPage = () => {





    return (
        <div>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                    <div className='grid grid-cols-3'>
                        <div className=''>
                            <MyChat ></MyChat>
                        </div>
                        <div className='col-span-2'>
                            <SingleChatWIndow socket={socket}></SingleChatWIndow>
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