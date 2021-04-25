import React from 'react';
import styles from "./style.module.css";
import { Button, TextField, makeStyles, MenuItem, Menu } from '@material-ui/core';
import { BottomNavigation } from '@material-ui/core';


const useStyles = makeStyles({
    loginButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "15px 30px",
        width: "30%",
        fontSize: 15,
    },
    deviceButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "15px 30px",
        width: "100%",
        fontSize: 15,
    },
    textField: {
        background: "#595959",
        width: "300px",
        fontSize: 18,
        color: "white",
    },
    menuButton: {
        background: "#30A0F5",
        borderRadius: 30,
        width: "30%",
        padding: "15px 30px",
        fontSize: 15,
        
    },
});

export default function HomePage() {

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

        const handleOpenMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };


        const handleBack = () => {
            console.log('login');
        };
    

    


    return (
        <div className={styles.rootContainer}>
            <div class="subdiv_allinline">
                <Button classes={{ root: classes.loginButton }}
                    onClick={handleBack}>Back
                </Button>
                    <Button className={styles.menuButton} 
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
                <TextField
                        classes={{ root: classes.textField }}
                        id="standard-basic"
                        variant="outlined"
                        size="large"
                        label="Search songs code"
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                    />
                    <p className={styles.paraStyle}>Playlist is empty now, please add songs</p>
                </form>
            </div>

        </div>
    );
}