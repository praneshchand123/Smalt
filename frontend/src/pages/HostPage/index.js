import React from "react";
import styles from "./style.module.css";
import { HostCreateRoom } from "../../components";

/* This HostPage function applies the CSS styles to the HostCreateRoom */

export default function HostPage() {
  return (
    <div className={styles.rootContainer}>
      <HostCreateRoom />
    </div>
  );
}
