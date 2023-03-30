// import React from 'react';
import React, { useContext, useEffect, useState, useRef } from "react";
import VideoContext from "../../context/VideoContext";
import "./Video.css";
import { io } from "socket.io-client";
import { socket } from "../../context/VideoState";

const Editor = () => {
  const {
    call,
    otherUser,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
    sendMsg,
    msgRcv,
    chat,
    setChat,
    setMsgRcv,
    setOtherUser,
    leaveCall1,
    userName,
    myVdoStatus,
    setMyVdoStatus,
    userVdoStatus,
    setUserVdoStatus,
    updateVideo,
    myMicStatus,
    userMicStatus,
    updateMic,
    screenShare,
    handleScreenSharing,
    fullScreen,
    room,
    setRoom,
    joinRoom,
    message,
    // messageReceived,
    setMessage,
    // setMessageReceived,
    // sendMessage
  } = useContext(VideoContext);
  
  
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message ,to:otherUser});
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  const send=(event)=>{
    setMessage(event.target.value)
    // setChat([...chat, event.target.value]);
    sendMessage();
    console.log("a:",messageReceived)
    // setSendMsg(event.target.value)
    // sendMsg(event.target.value);
    
}

    return (
        <div>
             {/* <input
        placeholder="Room Number..." 
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
        <button onClick={joinRoom}> Join Room</button> */}
             <input
        placeholder="Message..."
        onChange={(event)=>send(event)} onKeyUp={(event)=>send(event)}
      /><textarea id="w3review" name="w3review" rows="4" cols="50" value={messageReceived} contentEditable="true" Editor="truenpm run dev">  
      </textarea>
      {/* <button onClick={sendMessage}> Send Message</button> */}
      <h1> Message:</h1>
      {messageReceived}
        </div>
    );
}

export default Editor;
