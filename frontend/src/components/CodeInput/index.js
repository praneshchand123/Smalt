import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";

export default function CodeInput() {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <Button className={styles.primaryButton} onClick={handleBack}>
        Back
      </Button>
      <div className={styles.textFieldContainer}>
        <form noValidate autoComplete="off">
          <TextField
            className={styles.textField}
            id="standard-basic"
            variant="outlined"
            label="Playlist code"
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </form>
        <Button
          className={styles.primaryButton}
          onClick={handleBack}
          style={{ position: "absolute", bottom: 0, width: 300 }}
        >
          Enter
        </Button>
      </div>
    </>
  );
}
