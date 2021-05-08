import React from "react";
import axios from "axios";
import styles from "./style.module.css";
import {
  TextField,
  MenuItem,
  MenuList,
  Grow,
  ClickAwayListener,
} from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import { useCookies } from 'react-cookie';

export default function SongSearch() {
  const [suggestions, setSuggestions] = React.useState();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [cookies, setCookie] = useCookies(['name']);
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
      const response = await axios.get("http://localhost:3001/search/", {
        params: { 
                  room: cookies.room.id,
                  searchTerm: searchTerm,
         },
      });
      console.log(response.data);
      setSuggestions(response.data);
      setOpen(true);
      focusTextField();
    } else {
      setOpen(false);
    }
  };

  const handleSuggestionSelect = async (index) => {
    console.log(index);
    const toAdd = {
      room: cookies.room.id,
      track: suggestions[index],
    }
    const response = await axios.post("http://localhost:3001/users/song", toAdd);
  }

  return (
    <>
      <TextField
        noValidate
        autoComplete="off"
        aria-controls="songs-list"
        aria-haspopup="false"
        className={styles.textField}
        id="searchField"
        variant="outlined"
        label="Search songs"
        autoFocus={true}
        onChange={val => handleSearch(val.target.value)}
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
                        id={index}
                        onClick={e => handleSuggestionSelect(e.target.id)}
                        className={styles.menuItem}
                      >
                        <label id={index} style={{ float: "left" }}>{track.name}</label>
                        <img
                          id={index}
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
