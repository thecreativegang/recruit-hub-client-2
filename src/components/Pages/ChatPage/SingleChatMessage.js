import React from 'react';


const SingleChatMessage = ({ messageContent, userName }) => {
    return (

        <div
            className="message"
            id={userName === messageContent.author ? "you" : "other"}
        >
            <div>
                <div className="message-content">
                    <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleChatMessage;