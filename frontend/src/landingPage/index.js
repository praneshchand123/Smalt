import React from 'react';
import styles from "./style.module.css";
import { Button, Container, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
    primaryButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "20px 40px",
        width: "100%",
        fontSize: 18,
    },
});

export default function LandingPage() {
    const classes = useStyles();
    const history = useHistory();

    const handleJoinPlaylist = () => {
        console.log('join playlist');
        history.push('/joinplaylist');
    };

    return (
        <div className={styles.rootContainer}>
            <div className={styles.buttonContainer}>
                <Button
                    classes={{ root: classes.primaryButton }}
                >
                    Host a playlist
                </Button>
                <Button
                    classes={{ root: classes.primaryButton }}
                    style={{ position: 'absolute', bottom: 0, left: 0 }}
                    onClick={handleJoinPlaylist}
                >
                    Join a playlist
                </Button>
            </div>
        </div>
    );
}