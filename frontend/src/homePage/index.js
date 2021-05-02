import React from 'react';
import styles from "./style.module.css";
import { Button, TextField, makeStyles, MenuItem, Menu, Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import { TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    backButton: {
        background: "#30A0F5",
        borderRadius: 30,
        padding: "18px 40px",
        width: "30%",
        fontSize: 18,
    },
    textField: {
        background: "#595959",
        width: "300px",
        fontSize: 18,
        color: "white",
        margin: "10px"
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
});


export default function HomePage() {

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    //const [anchorEl2, setAnchorEl2] = React.useState(null);

    const [playList, setPlayList] = React.useState(null);

    const [tableAnchorEl, setTableAnchorEl] = React.useState(null);

        const handleOpenMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };


        const handleBack = () => {
            console.log('login');
        };

        /*const handleOpenTable = (event) => {
            setTableAnchorEl(tableAnchorEl ? null : event.currentTarget);
            setPlayList(true)
        };
        */

        
        const openTable = Boolean(tableAnchorEl);

        /*const handleOpenSongsMenu = (event) => {
            setAnchorEl2(event.currentTarget);
        };

        const handleSongsClose = () => {
            setAnchorEl2(null);
        };
        
        const addSong = (playList) => {
            setPlayList((prev) => {
              return [playList, ...prev];
            });
          };
        */

        /*
        const handlePlayListTabel = () => {
            if(table){
                return <p className={styles.paraStyle}>Playlist is empty now, please add songs</p>
            }else{
                return <Table></Table>
            }
        }
        */
    


    return (
        <div className={styles.rootContainer}>
            <div class="subdiv_allinline">
                <Button classes={{ root: classes.backButton }}
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
                        aria-controls="songs-list"
                        aria-haspopup="false"
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
                <p className={styles.paraStyle}>Playlist {playList ? 'is below' : 'is empty, please add songs' }</p>
                {/*
                <Menu
                    id="songs-list"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleSongsClose}
                    >
                    <MenuItem onClick={() => setPlayList('Song 1') }>Song 1</MenuItem>
                    <MenuItem onClick={() => setPlayList('Song 2')}>Song 2</MenuItem>
                    <MenuItem onClick={() => setPlayList('Song 3')}>Song 3</MenuItem>
                </Menu>
                */}
                <Table classes={{ root: classes.table }}>
                        <TableBody className={styles.tableStyle}>
                            <TableRow style={{backgroundColor:'#333333'}} className={styles.tableStyle}>
                                <TableCell className={styles.tableStyle} style={{borderBottom:"none"}} align="centre">Song</TableCell>
                                <TableCell style={{borderBottom:"none"}} align="centre" rowSpan={2}><img src="song.png"/></TableCell>

                            </TableRow>
                            <TableRow style={{backgroundColor:'#333333'}}>
                                <TableCell className={styles.tableStyle} style={{borderBottom:"none"}} align="centre">Artist</TableCell>
                                

                            </TableRow>
                        </TableBody>
                    </Table>

                    <Table classes={{ root: classes.table }}>
                    <TableBody className={styles.tableStyle}>
                            <TableRow style={{backgroundColor:'#333333'}}>
                                <TableCell className={styles.tableStyle} style={{borderBottom:"none"}} align="centre">Song</TableCell>
                                <TableCell style={{borderBottom:"none"}} align="centre" rowSpan={2}><img src="song.png"/></TableCell>

                            </TableRow>
                        
                        
                            <TableRow style={{backgroundColor:'#333333'}}>
                                <TableCell className={styles.tableStyle} style={{borderBottom:"none"}} align="centre">Artist</TableCell>
                                

                            </TableRow>
                        </TableBody>
                    </Table>
                </form>
            </div>

        </div>
    );
}