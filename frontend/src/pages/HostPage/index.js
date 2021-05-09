import React from "react";
import styles from "./style.module.css";
import { HostCreateRoom } from "../../components";

export default function HostPage() {


  return (
    <div className={styles.rootContainer}>
      <HostCreateRoom />
    </div>
  );
}
