import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import {
    Avatar,
    TableCell,
    TableRow,
  } from "@material-ui/core";

export default function Song(props) {
    console.log("I was called");
    const song = props.props;
    return (
        <>
            <TableRow className={styles.tableRow}>
                <TableCell className={styles.tableCellHead}>
                    <div className ={styles.songName} >{song.name}</div>
                    <div className ={styles.songArtist}>{song.artists}</div>
                    
                </TableCell>
                <TableCell className={styles.tableCell}>
                    <Avatar
                        variant="rounded"
                        src={song.imageURL}
                        className={styles.image}
                    />
                </TableCell>
            </TableRow>
        </>
    );
}


