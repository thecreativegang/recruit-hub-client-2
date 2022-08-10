import React, { useState, useEffect, useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Chatinput from "./Chatinput";
import { UserStore } from "../../../stateManagement/UserContext/UserContextStore";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatContainer = ({ currentChat, socket }) => {

  const userStore = useContext(UserStore);
  const data = userStore?.user;


  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);


  useEffect(() => {
    const asyncFetchDailyData = async () => {

      const response = await axios.post(`http://localhost:3001/messages/getmsg`, {
        from: data._id,
        to: currentChat._id,
      });
      setMessages(response.data);
    }
    asyncFetchDailyData();
  }, [currentChat]);


  // useEffect(() => {
  //   const getCurrentChat = async () => {
  //     if (currentChat) {
  //       await JSON.parse(localStorage.getItem("chat-app-user"))._id;
  //     }
  //   };
  //   getCurrentChat();
  // }, [currentChat]);


  const handleSendMsg = async (msg) => {

    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data._id,
      msg,
    });

    await axios.post(`http://localhost:3001/messages/addmsg`, {
      from: data._id,
      to: currentChat._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);



  return (
    <div className="w-100">
      {
        currentChat ?
          <div>
            {/* chat header */}
            <div className="flex bg-sky-500 p-2 px-3 my-border rounded items-center">
              <div class="avatar">
                <div class="w-[50px] rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
                </div>
              </div>
              <div className="text-white px-2 uppercase">
                <h3 className="text-2xl">{currentChat?.username ? currentChat.username : currentChat.email}</h3>
              </div>
            </div>
            {/* chat body */}
            <ScrollToBottom>
              <div className="message-body h-[86vh]">

                {messages.map((message) => {
                  return (
                    <div key={uuidv4()}>
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