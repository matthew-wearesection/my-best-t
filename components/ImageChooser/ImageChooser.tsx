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

const baseImg = '/my-best-t/assets/imagesTreeChoose';

const firstChildren: IQuestion['children'] = [
  {
    id: 'a6-1',
    src: `${baseImg}/endless-todo-list.jpg`,
    alt: 'Image 1-1',
    description: 'An endless to-do list',
    result: 'bos-bestie',
    children: [],
  },
  {
    id: 'a6-2',
    src: `${baseImg}/a-mirror.jpg`,
    alt: 'Image 1-1',
    description: 'A mirror',
    result: 'vain-pot-bestie',
    children: [],
  },
];

const secondChildren: IQuestion['children'] = [
  {
    id: 'a6-3',
    src: `${baseImg}/yes.jpg`,
    alt: 'Image 1-2',
    description: 'Yes',
    result: 'smart-alec-bestie',
    children: [],
  },
  {
    id: 'a6-4',
    src: `${baseImg}/no.jpg`,
    alt: 'Image 1-2',
    description: 'No',
    result: 'high-maintenance-bestie',
    children: [],
  },
];

const thirdChildren: IQuestion['children'] = [
  {
    id: 'a6-1',
    src: `${baseImg}/kopi-o-ultra-gao.jpg`,
    alt: 'Image 1-1',
    description: 'Kopi O Ultra Gao',
    result: 'siao-onz-bestie',
    children: [],
  },
  {
    id: 'a6-2',
    src: `${baseImg}/tehpeng.jpg`,
    alt: 'Image 1-1',
    description: 'Teh Peng',
    result: 'sweetheart-bestie',
    children: [],
  },
];

const fourChildren: IQuestion['children'] = [
  {
    id: 'a6-1',
    src: `${baseImg}/with-hope-and-dream.jpg`,
    alt: 'Image 1-1',
    description: 'With hopes and dreams',
    result: 'zen-bestie',
    children: [],
  },
  {
    id: 'a6-2',
    src: `${baseImg}/with-exp.jpg`,
    alt: 'Image 1-1',
    description: 'With Internship Experience',
    result: 'plain-water-bestie',
    children: [],
  },
];

const questions: IQuestion = {
  id: 'a1-1',
  src: '',
  alt: 'Image 1',
  question: `01-You and your bestie get stranded on a desert island. What's the first thing you do?`,
  children: [
    {
      id: 'a2-1',
      src: `${baseImg}/make-a-video.jpg`,
      alt: 'Image 1-1',
      description: 'Make a video',
      question: `02-You and your bestie can choose
      one national monument to be
      featured, which one is it?`,
      children: [
        {
          id: 'a3-1',
          src: `${baseImg}/the-merlion.jpg`,
          alt: 'Image 1-1',
          question: `03-What's your bestie's spending habits
          on a day out?`,
          description: 'The Merlion',
          children: [
            {
              id: 'a4-1',
              src: `${baseImg}/like-they.jpg`,
              alt: 'Image 1-1',
              description: 'Like they O$P$',
              question: `04-If you were an expressway, which would you be?`,
              children: [
                {
                  id: 'a5-1',
                  src: `${baseImg}/bke.jpg`,
                  alt: 'Image 1-1',
                  description: 'BKE',
                  question: `05-What is your bestie never seen without?`,
                  children: firstChildren,
                },
                {
                  id: 'a5-2',
                  src: `${baseImg}/mce.jpg`,
                  alt: 'Image 1-1',
                  description: 'MCE',
                  question: `05-Would you love your bestie if they were a worm?`,
                  children: secondChildren,
                },
              ],
            },
            {
              id: 'a4-2',
              src: `${baseImg}/like-a-baller.jpg`,
              alt: 'Image 1-2',
              description: 'Like a baller',
              question: `04-What utensil would you be ?`,
              children: [
                {
                  id: 'a5-3',
                  src: `${baseImg}/a-fork.jpg`,
                  alt: 'Image 1-2',
                  description: 'A Fork',
                  question: `05-If your bestie could only drink one thing for the
                  rest of their life, what would it be?`,
                  children: thirdChildren,
                },
                {
                  id: 'a5-4',
                  src: `${baseImg}/a-spoon.jpg`,
                  alt: 'Image 1-2',
                  description: 'A Spoon',
                  question: `05-Your bestie is in debt.
                  How are you paying for lunch?`,
                  children: fourChildren,
                },
              ],
            },
          ],
        },
        {
          id: 'a3-2',
          src: `${baseImg}/mbs.jpg`,
          alt: 'Image 1-2',
          question: `03-What do you and your bestie
          look at first when you go shopping?`,
          description: 'MBS',
          children: [
            {
              id: 'a4-3',
              src: `${baseImg}/our-bank-balance.jpg`,
              alt: 'Image 1-1',
              description: 'Our bank balance',
              question: `04-If you were an expressway, which would you be?`,
              children: [
                {
                  id: 'a5-1',
                  src: `${baseImg}/bke.jpg`,
                  alt: 'Image 1-1',
                  description: 'BKE',
                  question: `05-What is your bestie never seen without?`,
                  children: firstChildren,
                },
                {
                  id: 'a5-2',
                  src: `${baseImg}/mce.jpg`,
                  alt: 'Image 1-1',
                  description: 'MCE',
                  question: `05-Would you love your bestie if they were a worm?`,
                  children: secondChildren,
                },
              ],
            },
            {
              id: 'a4-4',
              src: `${baseImg}/each-other.jpg`,
              alt: 'Image 1-2',
              description: 'Each other',
              question: `04-What utensil would you be ?`,
              children: [
                {
                  id: 'a5-3',
                  src: `${baseImg}/a-fork.jpg`,
                  alt: 'Image 1-2',
                  description: 'A Fork',
                  question: `05-If your bestie could only drink one thing for the
                  rest of their life, what would it be?`,
                  children: thirdChildren,
                },
                {
                  id: 'a5-4',
                  src: `${baseImg}/a-spoon.jpg`,
                  alt: 'Image 1-2',
                  description: 'A Spoon',
                  question: `05-Your bestie is in debt.
                  How are you paying for lunch?`,
                  children: fourChildren,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'a2-2',
      src: `${baseImg}/seek-shelter.jpg`,
      alt: 'Image 1-2',
      question: `02-How do you and your bestie
      make decisions?`,
      description: 'Seek shelter',
      children: [
        {
          id: 'a3-9',
          src: `${baseImg}/scissors-paper-stone.jpg`,
          alt: 'Image 1-1',
          question: '03-What is your bestie reading these days?',
          description: 'Scissors Paper Stone',
          children: [
            {
              id: 'a4-9',
              src: `${baseImg}/dating-profile.jpg`,
              alt: 'Image 1-1',
              description: 'Dating profiles',
              question: `04-What do you listen to your commute?`,
              children: [
                {
                  id: 'a5-9',
                  src: `${baseImg}/the-mother-nagging.jpg`,
                  alt: 'Image 1-1',
                  description: `My mother's nagging`,
                  question: `05-Your bestie is in debt.
                  How are you paying for lunch?`,
                  children: fourChildren,
                },
                {
                  id: 'a5-8',
                  src: `${baseImg}/an-uncle-snoring.jpg`,
                  alt: 'Image 1-1',
                  description: `An uncle snoring`,
                  question: `05-Would you love your bestie if they were a worm?`,
                  children: secondChildren,
                },
              ],
            },
            {
              id: 'a4-8',
              src: `${baseImg}/a-self-help-book.jpg`,
              alt: 'Image 1-2',
              description: 'A Self Help book',
              question: `04-Would you rather have feet for hands, or hands for feet?`,
              children: [
                {
                  id: 'a5-2',
                  src: `${baseImg}/feet-for-hand.jpg`,
                  alt: 'Image 1-1',
                  description: 'Feet for hands',
                  question: `05-If your bestie could only drink one thing for the
                  rest of their life, what would it be?`,
                  children: thirdChildren,
                },
                {
                  id: 'a5-8',
                  src: `${baseImg}/hand-for-feet.jpg`,
                  alt: 'Image 1-1',
                  description: `Hands for feet`,
                  question: `05-What is your bestie never seen without?`,
                  children: firstChildren,
                },
              ],
            },
          ],
        },
        {
          id: 'a3-8',
          src: `${baseImg}/no-you-choose.jpg`,
          alt: 'Image 1-2',
          question: `03-Choose your bestie's alarm`,
          description: `Say "no, you choose" until
          someone caves`,
          children: [
            {
              id: 'a4-5',
              src: `${baseImg}/the-karang-guni.jpg`,
              alt: 'Image 1-1',
              description: `The Karang Guni Uncle's horn`,
              question: `04-What do you listen to your commute?`,
              children: [
                {
                  id: 'a5-9',
                  src: `${baseImg}/the-mother-nagging.jpg`,
                  alt: 'Image 1-1',
                  description: `My mother's nagging`,
                  question: `05-Your bestie is in debt.
                  How are you paying for lunch?`,
                  children: fourChildren,
                },
                {
                  id: 'a5-8',
                  src: `${baseImg}/an-uncle-snoring.jpg`,
                  alt: 'Image 1-1',
                  description: `An uncle snoring`,
                  question: `05-Would you love your bestie if they were a worm?`,
                  children: secondChildren,
                },
              ],
            },
            {
              id: 'a4-6',
              src: `${baseImg}/the-morning-bird.jpg`,
              description: `The morning bird that
              goes "ooo-woo"`,
              alt: 'Image 1-2',
              question: `04-Would you rather have feet for hands, or hands for feet?`,
              children: [
                {
                  id: 'a5-2',
                  src: `${baseImg}/feet-for-hand.jpg`,
                  alt: 'Image 1-1',
                  description: 'Feet for hands',
                  question: `05-If your bestie could only drink one thing for the
                  rest of their life, what would it be?`,
                  children: thirdChildren,
                },
                {
                  id: 'a5-8',
                  src: `${baseImg}/hand-for-feet.jpg`,
                  alt: 'Image 1-1',
                  description: `Hands for feet`,
                  question: `05-What is your bestie never seen without?`,
                  children: firstChildren,
                },
              ],
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
  // console.log(1, selectedImage);
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
