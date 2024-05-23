'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import styles from './Share.module.scss';

export const Share: React.FC<{ urlShare: string }> = ({ urlShare }) => {
  const router = useRouter();
  const onButtonClick = () => {
    router.push('/');
  };
  return (
    <div className={styles.container}>
      <button className={styles['button-select']} onClick={onButtonClick}>
        Make my selection
      </button>
      <div className={styles['social-container']}>
        <div>share</div>
        <FacebookShareButton title="Show me the facebook!" url={urlShare}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <a href={`https://threads.net/intent/post?text=${urlShare}`} target="_blank">
          <img
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'fill', background: 'black' }}
            src="/my-best-t/assets/threads.svg"
            alt="threads"
          />
        </a>
        <TwitterShareButton title="Show me the x!" url={urlShare}>
          <img
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'fill' }}
            src="/my-best-t/assets/x.svg"
            alt="threads"
          />
        </TwitterShareButton>
        <LinkedinShareButton title="Show me the Linkedin!" url={urlShare}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};
