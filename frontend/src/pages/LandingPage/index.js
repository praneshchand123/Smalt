import React, { useState, useEffect } from 'react';
import styles from "./style.module.css";
import { LandingOptions } from "../../components";

export default function LandingPage() {
    
  
    return (
        
        <div className={styles.rootContainer} >
            <p>
            It's <time dateTime={response}>{response}</time>
            </p>
            <LandingOptions />
            
        </div>
    );

}