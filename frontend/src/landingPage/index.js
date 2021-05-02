import React, { useState, useEffect } from 'react';
import axios from "axios";
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

      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //console.log(window.location.search);
    var code = new URLSearchParams(window.location.search).get("code")
    if(code != null){
        console.log("code found")
        const payload={
            params: {
                authCode: code
            }
        };
        const response = axios.get('http://localhost:3001/users/auth/code', payload);
    }
    console.log(code);
    
  });

    async function handleLogin() {
        const payload={
            params: {
                uri: 'http://localhost:3000/'
            }
        };
        // Make a request for a user with a given ID
        const response = await axios.get('http://localhost:3001/users/auth', payload);
        console.log(response.json);
        // handle success
        window.location.href = response.data;
        //window.location.href =response;
    }



    // function handleRedirect(){
    //     let code = getCode();
    //     console.out(code);
    //     window.history.pushState("", "", redirect_uri); // remove param from url

    // }
    function getCode(){
        let code = null;
        const queryString = window.location.search;
        if ( queryString.length > 0 ){
            const urlParams = new URLSearchParams(queryString);
            code = urlParams.get('code')
        }
        return code;
    }


    return (
        <div className={styles.rootContainer} >
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