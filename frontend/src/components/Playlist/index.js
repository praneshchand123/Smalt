import React from "react";
import styles from "./style.module.css";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: 300,
    background: "#595959",
    margin: "10px",
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

export default function Playlist() {
  const classes = useStyles();

  return (
    <>
      <Table classes={{ root: classes.table }}>
        <TableBody>
          <TableRow classes={{ root: classes.tableRow }}>
            <TableCell classes={{ root: classes.tableCellHead }}>
              Want you
            </TableCell>
            <TableCell classes={{ root: classes.tableCell }} rowSpan={2}>
              <img
                src="https://i.scdn.co/image/ab67616d00004851c34e9b33adb0030233a6efef"
                className={styles.image}
              />
            </TableCell>
          </TableRow>
          <TableRow classes={{ root: classes.tableRow }}>
            <TableCell classes={{ root: classes.tableCell }}>Kanine</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table classes={{ root: classes.table }}>
        <TableBody>
          <TableRow classes={{ root: classes.tableRow }}>
            <TableCell classes={{ root: classes.tableCellHead }}>
              Song
            </TableCell>
            <TableCell classes={{ root: classes.tableCell }} rowSpan={2}>
              <img
                src="https://i.scdn.co/image/ab67616d00001e024719d135efa3d7567c0d7faa"
                className={styles.image}
              />
            </TableCell>
          </TableRow>
          <TableRow classes={{ root: classes.tableRow }}>
            <TableCell classes={{ root: classes.tableCell }}>Artist</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
