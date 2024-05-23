'use client';
import { StartBanner } from '@/components/StartBanner/StartBanner';
import { useState } from 'react';
import { ImageChooser } from '../components/ImageChooser/ImageChooser';
import styles from './page.module.css';

export default function Home() {
  const [isStart, setStart] = useState(false);
  return (
    <main className={styles.main}>
      {isStart ? <ImageChooser /> : <StartBanner onStartClick={() => setStart(true)}></StartBanner>}
    </main>
  );
}
