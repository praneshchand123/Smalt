import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";

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
    size: "large",
  },
});

export default function CodeInput() {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <Button classes={{ root: classes.primaryButton }} onClick={handleBack}>
        Back
      </Button>
      <div className={styles.textFieldContainer}>
        <form noValidate autoComplete="off">
          <TextField
            classes={{ root: classes.textField }}
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
          classes={{ root: classes.primaryButton }}
          onClick={handleBack}
          style={{ position: "absolute", bottom: 0, width: 300 }}
        >
          Enter
        </Button>
      </div>
    </>
  );
}