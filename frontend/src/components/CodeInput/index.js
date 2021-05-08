import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import { useCookies } from 'react-cookie';
export default function CodeInput() {
  const history = useHistory();

  const [emptyFieldFlag, setEmptyFieldFlag] = React.useState(false);
  const [cookies, setCookie] = useCookies(['room']);
  const [textValue, setTextValue] = React.useState("");

  const handleEnter = () => {
    if (textValue !== "") {
      var cookie ={id :textValue,
        isHost :false}
      setCookie('room', cookie, { path: '/' })
      history.push("/home");
      
    }else{
      setEmptyFieldFlag(true);
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <Button className={styles.primaryButton} onClick={handleBack}>
        back
      </Button>
      <div className={styles.textFieldContainer}>

        <form noValidate autoComplete="off">
          <TextField
            className={styles.textField}
            id="standard-basic"
            variant="outlined"
            label="Playlist code"
            value={textValue}
            error={emptyFieldFlag}
            helperText={emptyFieldFlag && 'not a valid room code'}
            onChange={e => {setTextValue(e.target.value); setEmptyFieldFlag(false)}}
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </form>
        <Button
          className={styles.enterButton}
          onClick={handleEnter}
        >
          Enter
        </Button>
      </div>
    </>
  );
}
