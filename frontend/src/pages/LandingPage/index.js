import React, { useState, useEffect } from 'react';
import styles from "./style.module.css";
import { LandingOptions } from "../../components";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001/";
export default function LandingPage() {
    const [response, setResponse] = useState("");

    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on("FromAPI", data => {
        setResponse(data);
      });
      socket.on('WhichRoom', function () {
        console.log("recieved request for room");
        socket.emit('SpecifyRoom', { my: 'data' });
      });
    },[])
  
    return (
        
        <div className={styles.rootContainer} >
            <p>
            It's <time dateTime={response}>{response}</time>
            </p>
            <LandingOptions />
            
        </div>
    );

}