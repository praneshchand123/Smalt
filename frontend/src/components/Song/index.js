import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import {
    Table,
    TableBody,
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
                    {song.name}
                </TableCell>
                <TableCell className={styles.tableCell} rowSpan={2}>
                    <img
                        src={song.src}
                        className={styles.image}
                    />
                </TableCell>
            </TableRow>
            <TableRow className={styles.tableRow}>

                <TableCell className={styles.tableCell}>{song.artist}</TableCell>
            </TableRow>
        </>
    );
}


