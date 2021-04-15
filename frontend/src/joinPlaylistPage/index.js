import React from 'react';
import styles from "./style.module.css";
import { useHistory } from 'react-router-dom';
import { Button, Container, makeStyles } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
    primaryButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "20px 40px",
        width: "30%",
        fontSize: 18,
    },
});

export default function JoinPlaylistPage() {
    const classes = useStyles();
    const history = useHistory();

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
            <div className={styles.buttonContainer}>

            </div>
        </div>
    );
}