import React from "react";
import axios from "axios";
import styles from "./style.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function LandingOptions() {
  const history = useHistory();

  const handleJoinPlaylist = () => {
    console.log("join playlist");
    history.push("/joinplaylist");
  };

  async function handleLogin() {
    const payload = {
      params: {
        uri: "http://localhost:3000/host",
      },
    };
    // Make a request for a user with a given ID
    const response = await axios.get(
      "http://localhost:3001/users/auth",
      payload
    );
    console.log(response.json);
    // handle success
    window.location.href = response.data;
  }

  return (
    <div className={styles.buttonContainer}>
      <Button className={styles.topButton} onClick={handleLogin}>
        Host a playlist
      </Button>
      <Button className={styles.bottomButton} onClick={handleJoinPlaylist}>
        Join a playlist
      </Button>
    </div>
  );
}
