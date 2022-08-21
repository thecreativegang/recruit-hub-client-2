import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Chatinput from "./Chatinput";
import ScrollToBottom from "react-scroll-to-bottom";
import { FaUserCircle } from "react-icons/fa";
import { serverLink } from './../../../utilities/links';

const ChatContainer = ({ currentChat, currentUser, socket }) => {




  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {

    const asyncFetchDailyData = async () => {
      if (currentChat) {
        const response = await axios.post(`${serverLink}/messages/getmsg`, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    }

    asyncFetchDailyData();

  }, [currentChat]);




  const handleSendMsg = async (msg) => {
    await axios.post(`${serverLink}/messages/addmsg`, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });

    socket.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket) {
      socket.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages])


  return (
    <div className="w-100">
      {
        currentChat ?
          <div>
            {/* chat header */}
            <div className="flex bg-sky-500 p-2 px-3 my-border rounded items-center">
              <div class="avatar">
                <div class="w-[50px] rounded-full">
                  {

                    <FaUserCircle className='text-4xl mr-2 cursor-pointer' />
                  }
                </div>
              </div>
              <div className="text-white px-2 uppercase">
                <h3 className="lg:text-2xl text-sm">{currentChat?.username ? currentChat.username : currentChat.email}</h3>
              </div>
            </div>
            {/* chat body */}
            <ScrollToBottom>
              <div className="message-body h-[86vh]">

                {messages.map((message) => {
                  return (
                    <div ref={scrollRef} key={uuidv4()}>
                      <div
                        className={`message ${message.fromSelf ? "sended" : "recieved"}`}
                      >
                        <div className="content ">
                          <p>{message.message}</p>
                        </div>
                      </div>
                    </div>

                  );
                })}
              </div>
            </ScrollToBottom>
            <Chatinput handleSendMsg={handleSendMsg} />

          </div>
          :
          <h1 className="text-center text-3xl">
            Select your chat
          </h1>
      }




    </div>

  );
};



export default ChatContainer;