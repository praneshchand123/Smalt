import React from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";

export default function HostCreateRoom() {
  const history = useHistory();

  const [username, setUsername] = React.useState("");

  const createRoom = () => {
    var code = new URLSearchParams(window.location.search).get("code");
    if (code != null && username !== "") {
      const room = {
        authCode: code,
        userName: username,
      };
      const response = axios.post("http://localhost:3001/users/auth/code", room);
    }
    setUsername("");
    history.push("/home");
  };

  const handleBack = () => {
    history.push("/");
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
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
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
          onClick={createRoom}
          style={{ position: "absolute", bottom: 0, width: 300 }}
        >
          Enter
        </Button>
      </div>
    </>
  );
}
