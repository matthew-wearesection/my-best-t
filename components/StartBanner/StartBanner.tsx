'use client';
import React from 'react';
import styles from './StartBanner.module.scss';

type TStartBanner = {
  onStartClick: () => void;
};

export const StartBanner: React.FC<TStartBanner> = ({ onStartClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <div className={styles['title']}>What kind of bestie are you?</div>
        <div className={styles['subTitle']}>Take our quiz to discover your best "T"! </div>
        <div className={styles['subTitle']}>A free UNIQLO pin awaits when you're done!</div>
      </div>
      <button className={styles['button-start']} type="button" onClick={onStartClick}>
        START
      </button>
    </div>
  );
};
