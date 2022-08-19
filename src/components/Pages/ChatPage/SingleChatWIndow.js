import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { io } from "socket.io-client";

const socket = io.connect("${serverLink}");

const SingleChatWIndow = ({ socket, username, room, chatId }) => {


    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    // const [messages, setMessages] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [newMessage, setNewMessage] = useState("");
    // const [socketConnected, setSocketConnected] = useState(false);
    // const [typing, setTyping] = useState(false);
    // const [istyping, setIsTyping] = useState(false);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className="chat-window">
            {
                chatId ?
                    <div>
                        <div className="chat-header">
                            <p>Live Chat with : {chatId?.username ? chatId?.username : chatId?.email}</p>
                        </div>

                        <div className="chat-body">
                            <ScrollToBottom className="message-container">

                                {messageList.map((messageContent) => {
                                    return (
                                        <div
                                            className="message"
                                            id={username === messageContent.author ? "you" : "other"}
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
                                })}
                            </ScrollToBottom>
                        </div>
                        <div className="chat-footer">
                            <input
                                type="text"
                                value={currentMessage}
                                placeholder="Hey..."
                                onChange={(event) => {
                                    setCurrentMessage(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && sendMessage();
                                }}
                            />
                            <button onClick={sendMessage}>&#9658;</button>
                        </div>
                    </div>
                    :
                    <div>
                        <h1 className="text-center text-3xl mt-7 pt-6">Select your chat person for chat</h1>
                        <p className="text-center "> select one of them</p>
                    </div>
            }

        </div>
    );
};

export default SingleChatWIndow;