import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { useCookies } from 'react-cookie';
export default function HostCreateRoom() {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['room']);
  const [username, setUsername] = React.useState("");

  const [emptyFieldFlag, setEmptyFieldFlag] = React.useState(false);

  const createRoom = async() => {
    var code = new URLSearchParams(window.location.search).get("code");
    if (code != null && username !== "") {
      const room = {
        authCode: code,
        userName: username,
      };
      console.log("rree");
      const response = await axios.post("http://localhost:3001/users/auth/code", room);
      console.log(response)
      var cookie = {
        id: response.data,
        isHost: true
      }
      
      setCookie('room', cookie, { path: '/' });
      console.log("going")
      history.push("/home");
    } else {
      setEmptyFieldFlag(true);
    }
  };

  const handleBack = () => {
    history.push("/");
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
          label="Username"
          value={username}
          error={emptyFieldFlag}
          helperText={emptyFieldFlag && "Please enter a username"}
          onChange={(e) => {
            setUsername(e.target.value);
            setEmptyFieldFlag(false);
          }}
          InputProps={{
            style: { color: "#fff" },
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
        />
        <Button className={styles.primaryButton} onClick={createRoom}>
          Enter
        </Button>
      </div>
    </>
  );
}
