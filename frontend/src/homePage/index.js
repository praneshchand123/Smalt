import React from 'react';
import styles from "./style.module.css";
import { Button, TextField, makeStyles } from '@material-ui/core';


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
    paragraphy: {
        background: "#333333",
        padding: "5px",
        fontSize: 15,
    },

    headLine: {
        background: "#333333",
        padding: "5px",
        fontSize: 20,
    }


});

export default function HomePage() {
    console.log("homepage");
    const classes = useStyles();

    const handleLoginClick = () => {
        console.log('button click');
    }

    const handleFetch = () => {
        console.log('Fetch Device')
    }

    return (
        <div className={styles.rootContainer}>
            <div>
                <Button className={{ root: classes.primaryButton }}
                    onClick={handleLoginClick}>Login
                </Button>
            </div>
            <div className={styles.rootContainer}>
                <p className={{ root: classes.paragraphy }}>Playlist is empty now, please add songs</p>
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
            </div>
            <div>
                <p className={{ root: classes.headLine }}>Device</p>
                <Button className={{ root: classes.primaryButton }}
                    onClick={handleFetch}>
                </Button>
            </div>

            <div>
                <p className={{ root: classes.headLine }}>Active Friends</p>
            </div>

        </div>
    );
}