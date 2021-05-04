import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
import { SongSearch, Playlist } from "../../components";
import {
  Button,
  makeStyles,
  MenuItem,
  Menu,
} from "@material-ui/core";

const useStyles = makeStyles({
  backButton: {
    background: "#30A0F5",
    borderRadius: 30,
    padding: "18px 40px",
    width: "30%",
    fontSize: 18,
  },
  menuButton: {
    background: "#30A0F5",
    borderRadius: 30,
    width: "30%",
    padding: "18px 40px",
    fontSize: 18,
  },
  table: {
    width: 300,
    background: "#595959",
    margin: "10px",
  },
  showPlayListButton: {
    background: "#30A0F5",
    borderRadius: 30,
    width: "60%",
    padding: "18px 40px",
    fontSize: 18,
  },
  menuItem: {
    justifyContent: "right",
    zIndex: 20,
    position: "relative",
  },
  tableRow: {
    backgroundColor: "#333333",
  },
  tableCell: {
    borderBottom: "none",
    color: "white",
    align: "centre",
  },
  tableCellHead: {
    borderBottom: "none",
    color: "white",
    fontSize: "18pt",
    align: "centre",
  },
});

export default function HomePage() {
  const classes = useStyles();

  const history = useHistory();

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
        <Button classes={{ root: classes.backButton }} onClick={handleBack}>
          Back
        </Button>
        <Button
          className={styles.menuButton}
          classes={{ root: classes.menuButton }}
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
        <form>
          <SongSearch />
          <Playlist />
        </form>
      </div>
    </div>
  );
}
