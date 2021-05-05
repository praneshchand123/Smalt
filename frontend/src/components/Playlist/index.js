import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001/";
export default function Playlist() {

  const [data, setResponse] = useState("");
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("heresASong", data => {
      setResponse(data);
    });
    socket.on('WhichRoom', function () {
      console.log("recieved request for room");
      socket.emit('SpecifyRoom', { my: 'data' });

    });
  }, [])


  return (
    <>
      <Table className={styles.table}>
        <TableBody>
          <>
            <TableRow className={styles.tableRow}>
              <TableCell className={styles.tableCellHead}>
                {data.name}
              </TableCell>
              <TableCell className={styles.tableCell} rowSpan={2}>
                <img
                  src={data.src}
                  className={styles.image}
                />
              </TableCell>
            </TableRow>
            <TableRow className={styles.tableRow}>

              <TableCell className={styles.tableCell}>{data.artist}</TableCell>
            </TableRow>
          </>
        </TableBody>
      </Table>
    </>
  );
}
