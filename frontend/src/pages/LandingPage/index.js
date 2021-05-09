import React from 'react';
import styles from "./style.module.css";
import { LandingOptions } from "../../components";

/* This LandingPage function applies the CSS styles to the HostCreateRoom */

export default function LandingPage() {
  
    return (
        
        <div className={styles.rootContainer} >
            <LandingOptions />
        </div>
    );

}