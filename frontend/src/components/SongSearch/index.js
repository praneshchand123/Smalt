import React from "react";
import axios from "axios";
import styles from "./style.module.css";
import {
  TextField,
  makeStyles,
  MenuItem,
  MenuList,
  Grow,
  ClickAwayListener,
} from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  textField: {
    background: "#595959",
    width: "300px",
    fontSize: 18,
    color: "white",
    margin: "10px",
    size: "large",
  },
  textInput: {
    color: "#fff",
  },
  menuItem: {
    justifyContent: "right",
    zIndex: 20,
    position: "relative",
  },
});

export default function SongSearch() {
  const classes = useStyles();

  const [suggestions, setSuggestions] = React.useState();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const focusTextField = () => {
    document.getElementById("searchField").focus();
  };

  const handleCloseSuggestions = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleSearch = async (searchTerm) => {
    if (searchTerm !== "") {
      console.log(searchTerm);
      const response = await axios.get("http://localhost:3001/search/search", {
        params: { searchTerm: searchTerm },
      });
      console.log(response.data);
      setSuggestions(response.data);
      setOpen(true);
      focusTextField();
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <TextField
        noValidate
        autoComplete="off"
        aria-controls="songs-list"
        aria-haspopup="false"
        classes={{ root: classes.textField }}
        id="searchField"
        variant="outlined"
        size="large"
        label="Search songs"
        autoFocus={true}
        onChange={(val) => handleSearch(val.target.value)}
        InputProps={{
          style: { color: "#fff" },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
      />
      <Popper
        open={open}
        anchorEl={document.getElementById("searchField")}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseSuggestions}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {suggestions.map((track, index) => {
                    return (
                      <MenuItem
                        onClick={handleCloseSuggestions}
                        key={index}
                        classes={{ root: classes.menuItem }}
                      >
                        <label style={{ float: "left" }}>{track.name}</label>
                        <img
                          src={track.imageURL}
                          className={styles.image}
                          alt=""
                        />
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
