import React from 'react';

const SingleProfile = (props) => {
    return (
        <div className=''>
            <div className='my-2 px-2 border-b-2 rounded bg-red-200'>
                <h2 className='py-0'>  {props.chat.chatName}</h2>
                <p className='font-bold text-sm' >{props.chat.chatName} : <span className='font-normal'>last message</span> </p>
            </div>

        </div>
    );
};

export default SingleProfile;