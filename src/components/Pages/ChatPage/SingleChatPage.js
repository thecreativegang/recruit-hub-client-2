import "./SingleChat.css";
import io from "socket.io-client";
import { useState } from "react";
import SingleChatWIndow from "./SingleChatWIndow";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const socket = io.connect("http://localhost:3001");

const SingleChatPage = ({ chat }) => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [globalUser] = useAuthState(auth);

    // const [showChat, setShowChat] = useState(false);


    console.log(room);
    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", chat?._id);
            // setShowChat(true);
            setRoom("");
            setUsername("");
        }
    };
    return (
        <div className="App">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

            <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                {/* <input
                    className="p-2 border-red-100 border-2 rounded"
                    type="text"
                    placeholder="John..."
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                /> */}
                {/* <input
                    className="p-2 my-2 border-red-100 border-2 rounded"
                    type="text"
                    required
                    placeholder="Room ID..."
                    onChange={(event) => {
                        setRoom(event.target.value);
                    }}
                /> */}
                <input
                    className="p-2 my-2 border-red-100 border-2 rounded"
                    type="text"
                    disabled
                    placeholder={globalUser?.displayName}
                />
                <input
                    className="p-2 my-2 border-red-100 border-2 rounded"
                    type="text"
                    disabled
                    placeholder={chat?._id}
                />

                {

                    chat?._id !== "" ?

                        <label className="btn btn-sm" for="my-modal-3" onClick={joinRoom} class="btn text-white">Join A Room</label>
                        : <button className="btn my-2 py-2" disabled >
                            Join A Room
                        </button>

                }



            </div>

            {/* // <Chat socket={socket} username={username} room={room} /> */}


        </div>
    );
};

export default SingleChatPage;