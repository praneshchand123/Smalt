import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Song from "../Song"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001/";
export default function Playlist() {

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    console.log("daniel");
    console.log(songs);
  },[songs])
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("heresASong", (playlist) => {
      console.log("initsonglist")
      console.log(playlist.songs)
      setSongs(playlist.songs);
      console.log("after")
      console.log(songs);
    });
    socket.on('WhichRoom', function () {
      console.log("recieved request for room");
      //TODO COOKIES
      socket.emit('SpecifyRoom', { room: "tsSzbz" });

    });

    socket.on('newSong', (song) => {
      console.log("got something")
      console.log("beforenew")
      console.log(songs);
       setSongs([...songs, song]);
    })
  },[])



  return (
    <>
      <Table className={styles.table}>
        <TableBody>
          {
          songs.map(xd => {
            return(<Song props = {xd}/>)
          })
          }
        </TableBody>
      </Table>
    </>
  );
}
