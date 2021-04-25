import React from 'react';
import styles from "./style.module.css";
import { Button, Container, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { green, purple } from '@material-ui/core/colors';
const axios = require('axios');


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



    async function handleLogin() {
        const payload={
            params: {
                uri: 'http://localhost:3001/'
            }
        };
        // Make a request for a user with a given ID
        const response = await axios.get('http://localhost:3001/users/auth', payload);
        // handle success
        window.location.href = response.data;
    }

    // function handleRedirect(){
    //     let code = getCode();
        
    //     window.history.pushState("", "", redirect_uri); // remove param from url
    // }


    return (
        <div className={styles.rootContainer}>
            <div className={styles.buttonContainer}>
                <Button
                    classes={{ root: classes.primaryButton }}
                    onClick = {handleLogin}
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