import React, { useState } from 'react';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

import { io, Socket } from 'socket.io-client';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SingleChat = ({ chats }) => {
    const [globalUser] = useAuthState(auth);


    const [socketConnected, setSocketConnected] = useState(false)

    const ENDPOINT = "http://localhost:3001";
    let socket, selectedChatCompare;

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", globalUser);
        socket.on('connection', () => setSocketConnected(true));

    }, [])


    return (
        <div>

            <div className='flex justify-between bg-red-200'>

                <h2 className='text-3xl px-2 my-1'>Username</h2>
                <div class="drawer-content text-right text-black">
                    <label for="my-drawer" class="m-2 btn-sm btn lg:btn-primary"> <FontAwesomeIcon icon={faSearch} /> <span className='text-white px-2'> Search Chat</span>
                    </label>
                </div>
            </div>

            <div className='p-3 my-1 h-[90vh] rounded bg-slate-300'>
                <div className='grid place-content-stretch'>
                    <div className='text-start'>
                        <span>name</span>
                        <p className='p-0 m-0'>  users massege</p>
                        <span>time</span>

                    </div>

                    <div className='text-end'>
                        <span>name</span>
                        <p className='p-0 m-0'>  users massege</p>
                        <span>time</span>
                    </div>

                </div>
                <div className='mt-2 text-end'>
                    <input className='p-2 w-[90%] border-2 bg-slate-300' type="text" name="" id="" placeholder='Enter your text' />
                    <span className='mx-2 p-2 bg-slate-50 rounded'>send</span>

                </div>
            </div>
        </div>
    );
};

export default SingleChat;