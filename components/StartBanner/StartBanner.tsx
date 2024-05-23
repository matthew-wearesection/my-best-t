'use client';
import React from 'react';
import styles from './StartBanner.module.scss';
import Image from 'next/image';

type TStartBanner = {
  onStartClick: () => void;
};

export const StartBanner: React.FC<TStartBanner> = ({ onStartClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <Image alt="img" width={40} height={40} className={styles['star-top']} src="/my-best-t/assets/star.svg" />

        <div className={styles['title']}>What kind of bestie are you?</div>
        <div className={styles['subTitle']}>Take our quiz to discover your best "T"! </div>
        <div className={styles['subTitle']}>A free UNIQLO pin awaits when you're done!</div>
        <Image
          style={{ top: '20px', left: '160px' }}
          alt="img"
          width={60}
          height={60}
          src="/my-best-t/assets/star.svg"
        />
      </div>
      <button className={styles['button-start']} type="button" onClick={onStartClick}>
        START
      </button>
    </div>
  );
};
