import React, { useState, useEffect } from 'react';
import styles from "./style.module.css";
import { useHistory } from 'react-router-dom';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import axios from 'axios';
const useStyles = makeStyles({
    primaryButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "18px 40px",
        width: "30%",
        fontSize: 18,
    },
    textField: {
        background: "#595959",
        width: "300px",
        fontSize: 18,
        color: "white",
    },
});

export default function hostLoginPage() {
    const classes = useStyles();
    const history = useHistory();

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

    const handleBack = () => {
        console.log('back');
        history.goBack();
    };

    return (
        <div className={styles.rootContainer}>
                <Button
                    classes={{ root: classes.primaryButton }}
                    onClick={handleBack}
                >
                    Back
                </Button>
            <div className={styles.textFieldContainer}>
                <form noValidate autoComplete="off">
                    <TextField 
                        classes={{ root: classes.textField }}
                        id="standard-basic" 
                        variant="outlined" 
                        size="large" 
                        label="Username" 
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                </form>
                <Button
                    classes={{ root: classes.primaryButton }}
                    onClick={handleBack}
                    style={{ position: 'absolute', bottom: 0, width: 300 }}
                >
                    Enter
                </Button>
            </div>
        </div>
    );
}