import React, {useEffect} from "react";
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
  const [roomName, setRoomName] = React.useState("");

  const [emptyFieldFlag, setEmptyFieldFlag] = React.useState(false);
  useEffect( async() => {
    var code = new URLSearchParams(window.location.search).get("code");

    var spotifyLogin =cookies.host;
    console.log(`spotify login: ${spotifyLogin}`)
    if(code ==null&& spotifyLogin == null){
      history.push("/");
      return;
    }
    if(spotifyLogin== null){
      console.log(`spotify login: ${spotifyLogin}`)
      const login = {
        authCode: code,
      };
      const response = await axios.post("http://localhost:3001/host/login", login);
      console.log(response)
      var cookie = {
        username: response.data
      }
      setCookie('host', cookie, { path: '/' });
    }
    
  },[]);

  const createRoom = async() => {
    
    if (roomName !== "") {
      const room = {
        name: roomName,
        userName: cookies.host.username,
      };
      const response = await axios.post("http://localhost:3001/host/new", room);
      console.log(response)
      var cookie = {
        id: response.data
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
          value={roomName}
          error={emptyFieldFlag}
          helperText={emptyFieldFlag && "Please enter a room name"}
          onChange={(e) => {
            setRoomName(e.target.value);
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
