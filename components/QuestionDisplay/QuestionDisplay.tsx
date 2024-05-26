import React from 'react';
import styles from './QuestionDisplay.module.scss';
import { CustomImage } from '../CustomImage/CustomImage';

type TQuestionDisplayProps = { number: string | number; question: string };

export const QuestionDisplay: React.FC<TQuestionDisplayProps> = ({ number, question }) => {
  return (
    <div className={styles.container}>
      <CustomImage containerProps={{ className: styles['start-1'] }} src="/my-best-t/assets/star.svg" alt="start" />
      <CustomImage containerProps={{ className: styles['start-2'] }} src="/my-best-t/assets/star.svg" alt="start" />
      <div className={styles['question-number']}>{number}</div>
      <div className={styles['question']}>{question}</div>
    </div>
  );
};
