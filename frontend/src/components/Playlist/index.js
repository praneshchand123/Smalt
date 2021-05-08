import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Song from "../Song";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import socketIOClient from "socket.io-client";
import { useCookies } from "react-cookie";

const ENDPOINT = "http://localhost:3001/";

export default function Playlist() {
  const [cookies, setCookie] = useCookies(["name"]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {}, [songs]);

  useEffect(() => {
    const addSong = (song) =>
      setSongs((prevsonglist) => [...prevsonglist, song]);

    const socket = socketIOClient(ENDPOINT);

    socket.on("heresASong", (playlist) => {
      setSongs(playlist.songs);
    });

    socket.on("WhichRoom", function () {
      //TODO COOKIES
      socket.emit("SpecifyRoom", { room: cookies.room.id });
    });

    socket.on("newSong", (song) => {
      addSong(song);
    });

    socket.on("songUpdated", (updatedSong) => {

    });
  }, []);

  return (
    <>
      <Table className={styles.table}>
        <TableBody>
          {songs.map((xd) => {
            return <Song props={xd} />;
          })}
        </TableBody>
      </Table>
    </>
  );
}
