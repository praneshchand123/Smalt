import React from 'react';
import styles from "./style.module.css";
import { Button, TextField, makeStyles } from '@material-ui/core';
import { BottomNavigation } from '@material-ui/core';


const useStyles = makeStyles({
    loginButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "15px 30px",
        width: "30%",
        fontSize: 15,
    },
    deviceButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "15px 30px",
        width: "100%",
        fontSize: 15,
    },
    textField: {
        background: "#595959",
        width: "300px",
        fontSize: 18,
        color: "white",
    },
});

export default function HomePage() {

    const classes = useStyles();

    const handleLoginClick = () => {
        console.log('button click');
    };

    const handleFetch = () => {
        console.log('Fetch Device');
    };

    return (
        <div className={styles.rootContainer}>
            <div>
                <Button classes={{ root: classes.loginButton }}
                    onClick={handleLoginClick}>Login
                </Button>
            </div>
            <div className={styles.bodyPartContainer}> 
                <form>
                    <p className={styles.paraStyle}>Playlist is empty now, please add songs</p>
                    <TextField
                        classes={{ root: classes.textField }}
                        id="standard-basic"
                        variant="outlined"
                        size="large"
                        label="Search songs code"
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                    <p className={styles.paraStyle}>Device</p>
                    <Button classes={{ root: classes.deviceButton }}
                        onClick={handleFetch}>Fetch Device
                    </Button>
                </form>
            </div>

        </div>
    );
}