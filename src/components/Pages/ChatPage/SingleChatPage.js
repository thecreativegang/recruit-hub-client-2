import "./SingleChat.css";
import io from "socket.io-client";
import { useState } from "react";
import SingleChatWIndow from "./SingleChatWIndow";

const socket = io.connect("http://localhost:3001");

const SingleChatPage = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");

    // const [showChat, setShowChat] = useState(false);

    console.log(room);
    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            // setShowChat(true);
            setRoom("");
            setUsername("");
        }
    };
    return (
        <div className="App">

            <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                <input
                    className="p-2 border-red-100 border-2 rounded"
                    type="text"
                    placeholder="John..."
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <input
                    className="p-2 my-2 border-red-100 border-2 rounded"
                    type="text"
                    required
                    placeholder="Room ID..."
                    onChange={(event) => {
                        setRoom(event.target.value);
                    }}
                />

                {

                    room !== "" ?

                        <label className="btn btn-sm" for="my-modal-3" onClick={joinRoom} class="btn text-white">Join A Room</label>
                        : <button className="btn my-2 py-2" disabled >
                            Join A Room
                        </button>

                }



            </div>

            {/* // <Chat socket={socket} username={username} room={room} /> */}
            {/* <SingleChatWIndow socket={socket} username={username} room={room} /> */}

        </div>
    );
};

export default SingleChatPage;