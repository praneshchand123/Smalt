import React, { useContext } from "react";
import styles from "./style.module.css";
import Song from "../Song";
import { Table, TableBody } from "@material-ui/core";
import { PlaylistContext } from "../../playlist-context";

const ENDPOINT = "http://localhost:3001/";

export default function Playlist(props) {
  const [playlist, setPlaylist] = useContext(PlaylistContext);

  return (
    <>
      <Table className={styles.table}>
        <TableBody>
          {playlist.map((xd) => {
            return <Song props={xd} />;
          })}
        </TableBody>
      </Table>
    </>
  );
}
