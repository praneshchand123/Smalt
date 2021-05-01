import React from 'react';
import styles from "./style.module.css";
import { Button, TextField, makeStyles, MenuItem, Menu, Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import { TableContainer } from '@material-ui/core';


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
    },
    menuButton: {
        background: "#30A0F5",
        borderRadius: 30,
        width: "30%",
        padding: "18px 40px",
        fontSize: 18,
        
    },
    table: {
        minWidth: "300px",
    },
});

export default function HomePage() {

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);

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

        const handleOpenTable = (event) => {
            setTableAnchorEl(tableAnchorEl ? null : event.currentTarget);
        };

        const openTable = Boolean(tableAnchorEl);
    

    


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
                <p className={styles.paraStyle}>Playlist is empty now, please add songs</p>
                <TextField
                        onClick={handleOpenTable}
                        aria-controls="table-list"
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
                    <Popper id="table-list" open={openTable} anchorEl={tableAnchorEl}>
                        <Table className={{root: classes.table}}>
                            <TableHead>
                            <TableRow>
                                <TableCell align="centre">Songs code</TableCell>
                                <TableCell align="centre">Songs name</TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                <TableCell align="centre">code here</TableCell>
                                <TableCell align="centre">name here</TableCell>
                            
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Popper>
                </form>
            </div>

        </div>
    );
}