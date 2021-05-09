import React from 'react';
import styles from './style.module.css';
import { CodeInput } from '../../components';

/* This JoinPlaylistPage function applies the CSS styles to the HostCreateRoom */

export default function JoinPlaylistPage() {
  return (
    <div className={styles.rootContainer}>
      <CodeInput />
    </div>
  );
}
