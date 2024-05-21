import { Share } from '@/components/Share/Share';
import styles from '@/styles/result.module.scss';
import { Metadata } from 'next';

const config: Record<string, Metadata | any> = {
  doglover: {
    description: 'You are the dog lover',
    imgSrc: '/dog-result.jpeg',
  },
  catlover: {
    description: 'You are the cat lover',
    imgSrc: '/cat-result.jpeg',
  },
  same: {
    description: 'You are love all',
    imgSrc: '/dog-cat-result.jpeg',
  },
};

export async function generateStaticParams() {
  const total = [{ id: 'doglover' }, { id: 'catlover' }, { id: 'same' }];
  return total;
}

export async function generateMetadata({ params }: { params: { id: string; image: string } }) {
  return {
    title: params.id,
    ...config[params.id],
  } satisfies Metadata;
}

export default function ResultPage({ params }: { params: { id: string; image: string } }) {
  const description = config[params.id].description;
  const imgSrc = config[params.id].imgSrc;
  return (
    <div className={styles['congratulation']}>
      <img src={imgSrc} />
      <h1>Congratulation!</h1>
      <div>{description}</div>
      <Share urlShare="google.com" />
    </div>
  );
}
