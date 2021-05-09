import React, { useState } from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite'

import {
    Avatar,
    TableCell,
    TableRow,

} from "@material-ui/core";

export default function Song(props) {
    console.log("I was called");
    const song = props.props;
    var formattedArtist = "";
    song.artists.forEach(function(element) { 
        if (formattedArtist == ""){
            formattedArtist = element
        }else{
        formattedArtist = formattedArtist + ", " + element
        }
        });
        
    const [likeButtonColor, setLikeButtonColor] = useState('inherit');
    const handleLikeButton = () => {
        if (likeButtonColor !== 'inherit') {
            setLikeButtonColor('inherit');
        } else {
            setLikeButtonColor('secondary');
        }

    };
    return (
        <>
            <TableRow className={styles.tableRow}>
                <TableCell className={styles.tableCell}>
                    <Avatar
                        variant="rounded"
                        src={song.imageURL}
                        className={styles.image}
                    />
                </TableCell>
                <TableCell className={styles.tableCellHead}>
                    <div className={styles.songName} >{song.name}</div>
                    <div className={styles.songArtist}>{formattedArtist}</div>
                </TableCell>
                <TableCell className={styles.tableCell}>
                    <IconButton onClick={handleLikeButton} color={likeButtonColor}>
                        <FavoriteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        </>
    );
}


