'use client';
import React from 'react';
import { FacebookIcon, FacebookShareButton } from 'react-share';
import styles from './Share.module.scss';

export const Share: React.FC<{ urlShare: string }> = ({ urlShare }) => {
  return (
    <div className={styles.container}>
      <div>share</div>

      <FacebookShareButton title="Show me the facebook!" url={urlShare}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};
