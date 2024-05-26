'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageNode from '../ImageNode/ImageNode';
import { QuestionDisplay } from '../QuestionDisplay/QuestionDisplay';
import styles from './ImageChoose.module.scss';

export interface IQuestion {
  id: string;
  src: string;
  alt: string;
  children: Array<IQuestion & { description: string }>;
  question?: `${string}-${string}`;
  result?: string;
}

const questions: IQuestion = {
  id: 'a1-1',
  src: '/my-best-t/assets/dog1.jpg',
  alt: 'Image 1',
  question: '01-first question ?',
  children: [
    {
      id: 'a2-1',
      src: '/my-best-t/assets/dog2.jpg',
      alt: 'Image 1-1',
      description: 'first dog',
      question: '02-question 2?',
      children: [
        {
          id: 'a3-1',
          src: '/my-best-t/assets/dog3.jpg',
          alt: 'Image 1-1',
          question: '03-question 3?',
          description: 'second dog',
          children: [
            {
              id: 'a4-1',
              src: '/my-best-t/assets/dog4.jpg',
              alt: 'Image 1-1',
              result: 'doglover',
              description: 'lovely dog',

              children: [],
            },
            {
              id: 'a4-2',
              src: '/my-best-t/assets/cat4.jpg',
              alt: 'Image 1-2',
              description: 'lovely cat',
              result: 'same',
              children: [],
            },
          ],
        },
        {
          id: 'a3-2',
          src: '/my-best-t/assets/cat3.jpg',
          alt: 'Image 1-2',
          question: '04-question 3?',
          description: 'second cat',

          children: [
            {
              id: 'a4-3',
              src: '/my-best-t/assets/dog4.jpg',
              alt: 'Image 1-1',
              result: 'doglover',
              description: 'lovely dog',

              children: [],
            },
            {
              id: 'a4-4',
              src: '/my-best-t/assets/cat4.jpg',
              alt: 'Image 1-2',
              result: 'catlover',
              description: 'lovely cat',

              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'a2-2',
      src: '/my-best-t/assets/cat1.jpg',
      alt: 'Image 1-2',
      question: '02-where?',
      description: 'first cat',

      children: [
        {
          id: 'a3-4',
          src: '/my-best-t/assets/dog3.jpg',
          alt: 'Image 1-1',
          question: '03-question 3?',
          description: 'best dog ever',
          children: [
            {
              id: 'a4-5',
              src: '/my-best-t/assets/dog4.jpg',
              alt: 'Image 1-1',
              result: 'doglover',
              description: 'best dog ever 1',

              children: [],
            },
            {
              id: 'a4-6',
              src: '/my-best-t/assets/cat4.jpg',
              alt: 'Image 1-2',
              description: 'best dog cat 1',

              result: 'same',
              children: [],
            },
          ],
        },
        {
          id: 'a3-5',
          src: '/my-best-t/assets/cat3.jpg',
          alt: 'Image 1-2',
          question: '03-question 3?',
          result: 'same',
          description: 'best cat ever',

          children: [
            {
              id: 'a4-5',
              src: '/my-best-t/assets/dog4.jpg',
              alt: 'Image 1-1',
              result: 'doglover',
              description: 'best dog ever 1',

              children: [],
            },
            {
              id: 'a4-6',
              src: '/my-best-t/assets/cat4.jpg',
              description: 'best dog cat 1',

              alt: 'Image 1-2',
              result: 'same',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// BFS algorithm to find node by his ID
const bfsSearch = (graph: IQuestion[], targetId: string) => {
  const queue = [...graph];
  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode?.id === targetId) {
      return currNode;
    }
    if (currNode?.children) {
      queue.push(...currNode.children);
    }
  }
};

export const ImageChooser = () => {
  const [selectedImage, setSelectedImage] = useState<IQuestion | undefined>(questions);
  const router = useRouter();
  const onSelectedNote = ({ nodeId, result }: { nodeId: string; result?: string }) => {
    if (result) {
      router.push(`/result/${result}`);
      return;
    }
    const node = bfsSearch(questions.children, nodeId);
    setSelectedImage(node);
  };
  const questionNumber = selectedImage?.question?.split('-')?.at(0) || 1;
  const questionString = selectedImage?.question?.split('-')?.at(1) || '';

  return (
    <div className={styles.container}>
      <QuestionDisplay number={questionNumber} question={questionString} />
      <div className={styles['image-wrapper']}>
        {selectedImage?.children?.map((img, indx) => (
          <ImageNode
            key={img.id}
            image={img}
            isTransformBackground={indx > 0}
            onSelect={() => onSelectedNote({ nodeId: img.id, result: img?.result })}
          />
        ))}
      </div>
    </div>
  );
};
