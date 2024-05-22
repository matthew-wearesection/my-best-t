'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ImageNode from '../ImageNode/ImageNode';
import styles from './ImageChoose.module.scss';

export interface IImage {
  id: string;
  src: string;
  alt: string;
  children: IImage[];
  result?: string;
}

const images: IImage[] = [
  {
    id: 'a1-1',
    src: '/quiz/assets/dog1.jpg',
    alt: 'Image 1',
    children: [
      {
        id: 'a2-1',
        src: '/quiz/assets/dog2.jpg',
        alt: 'Image 1-1',
        children: [
          {
            id: 'a3-1',
            src: '/quiz/assets/dog3.jpg',
            alt: 'Image 1-1',
            children: [
              {
                id: 'a4-1',
                src: '/quiz/assets/dog4.jpg',
                alt: 'Image 1-1',
                result: 'doglover',
                children: [],
              },
              {
                id: 'a4-2',
                src: '/quiz/assets/cat4.jpg',
                alt: 'Image 1-2',
                result: 'same',
                children: [],
              },
            ],
          },
          {
            id: 'a3-2',
            src: '/quiz/assets/cat3.jpg',
            alt: 'Image 1-2',
            children: [
              {
                id: 'a4-3',
                src: '/quiz/assets/dog4.jpg',
                alt: 'Image 1-1',
                result: 'doglover',
                children: [],
              },
              {
                id: 'a4-4',
                src: '/quiz/assets/cat4.jpg',
                alt: 'Image 1-2',
                result: 'catlover',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'a2-2',
        src: '/quiz/assets/cat1.jpg',
        alt: 'Image 1-2',
        children: [
          {
            id: 'a3-4',
            src: '/quiz/assets/dog3.jpg',
            alt: 'Image 1-1',
            children: [
              {
                id: 'a4-5',
                src: '/quiz/assets/dog4.jpg',
                alt: 'Image 1-1',
                result: 'doglover',
                children: [],
              },
              {
                id: 'a4-6',
                src: '/quiz/assets/cat4.jpg',
                alt: 'Image 1-2',
                result: 'same',
                children: [],
              },
            ],
          },
          {
            id: 'a3-5',
            src: '/quiz/assets/cat3.jpg',
            alt: 'Image 1-2',
            result: 'same',
            children: [
              {
                id: 'a4-7',
                src: '/quiz/assets/dog4.jpg',
                alt: 'Image 1-1',
                result: 'catlover',
                children: [],
              },
              {
                id: 'a4-8',
                src: '/quiz/assets/cat4.jpg',
                alt: 'Image 1-2',
                result: 'same',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'b1-1',
    src: '/quiz/assets/cat2.jpg',
    alt: 'cat',
    children: [
      {
        id: 'b2-1',
        src: '/quiz/assets/dog1.jpg',
        alt: 'Image 1-1',
        children: [
          {
            id: 'b3-1',
            src: '/quiz/assets/dog2.jpg',
            alt: 'Image 1-1',
            result: 'same',
            children: [],
          },
          {
            id: 'b3-2',
            src: '/quiz/assets/cat3.jpg',
            alt: 'Image 1-2',
            result: 'catlover',
            children: [],
          },
        ],
      },
      {
        id: 'b2-2',
        src: '/quiz/assets/cat3.jpg',
        alt: 'Image 1-2',
        children: [
          {
            id: 'b3-3',
            src: '/quiz/assets/dog3.jpg',
            alt: 'Image 1-1',
            result: 'same',
            children: [],
          },
          {
            id: 'b3-4',
            src: '/quiz/assets/cat4.jpg',
            alt: 'Image 1-2',
            result: 'catlover',
            children: [],
          },
        ],
      },
    ],
  },
];

// BFS algorithm to find node by his ID
const bfsSearch = (graph: IImage[], targetId: string) => {
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
  const [selectedImage, setSelectedImage] = useState<IImage[]>(images);
  const router = useRouter();
  const onSelectedNote = ({ nodeId, result }: { nodeId: string; result?: string }) => {
    if (result) {
      router.push(`/result/${result}`);
      return;
    }
    const node = bfsSearch(images, nodeId);
    setSelectedImage(node?.children || []);
  };

  return (
    <div className={styles.container}>
      <div className={styles['text-wrapper']}>
        <p className={styles.which}>Which</p>
        <p className={styles.would}>would</p>
        <p className={styles.you}>you</p>
        <p className={styles.rather}>rather?</p>
      </div>
      <img className={styles['bg-start']} src={'/quiz/assets/start.png'} />
      <img className={styles['bg-start-1']} src={'/quiz/assets/start.png'} />
      <div className={styles['image-wrapper']}>
        {selectedImage?.map(img => (
          <ImageNode
            key={img.id}
            image={img}
            onSelect={() => onSelectedNote({ nodeId: img.id, result: img?.result })}
          />
        ))}
      </div>
    </div>
  );
};
