import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
import { SongSearch, WebSocketProvider } from "../../components";
import {
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { useCookies } from 'react-cookie';
import { PlaylistContext } from '../../playlist-context';

/* These import statements, import various icons shown on the homepage from Material-UI */
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';

/* This HomePage() function harnesses Material-UI and React to create the homepage. It obtains the history object from the history hook in which uses the created room to 
obtain and retrieve the cookies. The pop over menu button has the onClick prop set to handleOpenMenu function where it sets the anchor element to open the pop over menu.*/

export default function HomePage() {

  const history = useHistory();
  const [cookies, setCookie] = useCookies(['room']);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [playlist, setPlaylist] = React.useState( [] );

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    console.log("homepage rerender");
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.rootContainer}>
      <div class="subdiv_allinline">
        <IconButton className={styles.backButton} onClick={handleBack}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          className={styles.menuButton}
          onClick={handleOpenMenu}
          aria-controls="menu-list"
          aria-haspopup="true"
        >
          <DehazeIcon />
        </IconButton>
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
        <div>
          <p className={styles.namelogo}><i>Smalt</i></p>
          <h1 className={styles.name}>Room: {cookies.room.id}</h1>
          <PlaylistContext.Provider value={[playlist, setPlaylist]}>
          <SongSearch />
          <WebSocketProvider />
          </PlaylistContext.Provider>
        </div>
      </div>
    </div>
  );
}
