import React from 'react';
import SingleChat from './SingleChat';
import SingleChatPage from './SingleChatPage';
import SingleChatWIndow from './SingleChatWIndow';
const ChatBox = ({ setChatId, globalUser, socket }) => {

    return (
        <div className=''>

            {/* <SingleChat chats={chats} /> */}
            {/* <SingleChatPage></SingleChatPage> */}

            {/* <SingleChatWIndow></SingleChatWIndow> */}

            <SingleChatWIndow socket={socket} globalUser={globalUser} />

        </div>
    );
};

export default ChatBox;