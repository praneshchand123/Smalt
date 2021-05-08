import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import { useCookies } from 'react-cookie';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
export default function CodeInput() {
  const history = useHistory();

  const [emptyFieldFlag, setEmptyFieldFlag] = React.useState(false);
  const [cookies, setCookie] = useCookies(['room']);
  const [textValue, setTextValue] = React.useState("");

  const handleEnter = async () => {
    console.log(`handle ${textValue}`)
    if (textValue !== "") {
      console.log("not empty")
      var params = {
        roomCode: textValue
      }
      axios.get("http://localhost:3001/join", { params: params }).then((res) => {
        console.log("valid room entered")
        var cookie = {
          id: textValue,
          isHost: false
        }
        setCookie('room', cookie, { path: '/' })
        history.push("/home");
      }).catch(function (error) {
        console.log(error);
        setEmptyFieldFlag(true);
      });
    } else{
      console.log("empty")
    }
  };

    const handleBack = () => {
      history.goBack();
    };

    return (
      <>
        <IconButton className={styles.backButton} onClick={handleBack}>
          <ArrowBackIosIcon />
        </IconButton>
        <div className={styles.textFieldContainer}>
          <TextField
            noValidate
            autoComplete="off"
            className={styles.textField}
            id="standard-basic"
            variant="outlined"
            label="Playlist code"
            value={textValue}
            error={emptyFieldFlag}
            helperText={emptyFieldFlag && "invalid room code"}
            onChange={(e) => {
              setTextValue(e.target.value);
              setEmptyFieldFlag(false);
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
          <Button className={styles.enterButton} onClick={handleEnter}>
            Enter
        </Button>
        </div>
      </>
    );
  }
