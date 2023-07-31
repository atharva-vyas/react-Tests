import React, { useEffect, useState } from "react"
import Peer from "simple-peer"
import io from "socket.io-client"

const socket = io.connect("http://localhost:5000")

function App() {
  const [uid, setUid] = useState("")
  const [message, setMessage] = useState("")
  

  function sendMessage() {
    const peer = new Peer({
			initiator: true,
			trickle: false
		})
    
    peer.on("signal", (data) => {
      socket.emit("newMessage", {uid: uid, message: message})
    })

    setMessage("")
  }


  useEffect(() => {
    socket.on('getID', (data) => {
      setUid(data)
    })

    socket.on('response', (data) => {
      alert(data.response);
    })
  }, [])
  
  
  return (
    <div className="App">
      <div align="center">
        <h1>your id: <u>{uid}</u></h1>
      </div>
      
      <br /><br /><br /><br />

      <div align="center">
        <textarea placeholder="send message to server" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} rows="4" cols="50"/>
        <br />
        <button onClick={sendMessage}>send</button>
      </div>
       
    </div>
  );
}

export default App;
