import React from 'react';
import styles from './style.module.css';
import { CodeInput } from '../../components';

/* This HostPage function applies the CSS styles to the CodeInput */

export default function JoinPlaylistPage() {
  return (
    <div className={styles.rootContainer}>
      <CodeInput />
    </div>
  );
}
