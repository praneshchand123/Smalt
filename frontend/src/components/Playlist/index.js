import React from "react";
import styles from "./style.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

export default function Playlist() {
  return (
    <>
      <Table className={styles.table}>
        <TableBody>
          <TableRow className={styles.tableRow}>
            <TableCell className={styles.tableCellHead}>
              Want you
            </TableCell>
            <TableCell className={styles.tableCell} rowSpan={2}>
              <img
                src="https://i.scdn.co/image/ab67616d00004851c34e9b33adb0030233a6efef"
                className={styles.image}
              />
            </TableCell>
          </TableRow>
          <TableRow className={styles.tableRow}>
            <TableCell className={styles.tableCell}>Kanine</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className={styles.table}>
        <TableBody>
          <TableRow className={styles.tableRow}>
            <TableCell className={styles.tableCellHead}>
              Song
            </TableCell>
            <TableCell className={styles.tableCell} rowSpan={2}>
              <img
                src="https://i.scdn.co/image/ab67616d00001e024719d135efa3d7567c0d7faa"
                className={styles.image}
              />
            </TableCell>
          </TableRow>
          <TableRow className={styles.tableRow}>
            <TableCell className={styles.tableCell}>Artist</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
