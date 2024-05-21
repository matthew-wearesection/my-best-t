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
    id: '1',
    src: '/dog.jpeg',
    alt: 'Image 1',
    children: [
      {
        id: '5',
        src: '/dog2.jpeg',
        alt: 'Image 1-1',
        result: 'doglover',
        children: [],
      },
      {
        id: '6',
        src: '/cat3.jpeg',
        alt: 'Image 1-2',
        result: 'same',
        children: [],
      },
    ],
  },
  {
    id: '2',
    src: '/cat2.jpeg',
    alt: 'cat',
    children: [
      {
        id: '5',
        src: '/dog.jpeg',
        alt: 'Image 1-1',
        result: 'same',
        children: [],
      },
      {
        id: '6',
        src: '/cat3.jpeg',
        alt: 'Image 1-2',
        result: 'catlover',
        children: [],
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
      <img className={styles['bg-start']} src="/start.png" />
      <img className={styles['bg-start-1']} src="/start.png" />
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
