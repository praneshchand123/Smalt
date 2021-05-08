import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
import { SongSearch, Playlist } from "../../components";
import {
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { useCookies } from 'react-cookie';


export default function HomePage() {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['room']);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.rootContainer}>
      <div class="subdiv_allinline">
        <Button className={styles.backButton} onClick={handleBack}>
          back
        </Button>
        <Button
          className={styles.menuButton}
          onClick={handleOpenMenu}
          aria-controls="menu-list"
          aria-haspopup="true"
        >
          Open Menu
        </Button>
        <Menu
          id="menu-list"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <div className={styles.bodyPartContainer}>
        
        <form className={styles.componentsContainer}>
          <h1>Room: {cookies.room.id}</h1>
          <SongSearch />
          <Playlist />
        </form>
      </div>
    </div>
  );
}
