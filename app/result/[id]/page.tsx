import { CustomImage } from '@/components/CustomImage/CustomImage';
import { DownloadImg } from '@/components/DownloadImg/DownloadImg';
import { Share } from '@/components/Share/Share';
import styles from '@/styles/result.module.scss';
import { Metadata } from 'next';

const basePath = '/my-best-t';

const config: Record<string, Metadata | any> = {
  'bos-bestie': {
    description: 'Bos$-y Bestie',
    imgSrc: `${basePath}/assets/dog-result.jpeg`,
  },
  'vain-pot-bestie': {
    description: 'Vain Pot Bestie',
    imgSrc: `${basePath}/assets/cat-result.jpeg`,
  },
  'smart-alec-bestie': {
    description: 'Smart Alec Bestie',
    imgSrc: `${basePath}/assets/dog-cat-result.jpeg`,
  },
  'high-maintenance-bestie': {
    description: 'High Maintenance Bestie',
    imgSrc: `${basePath}/assets/dog-cat-result.jpeg`,
  },
  'siao-onz-bestie': {
    description: 'Siao Onz Bestie',
    imgSrc: `${basePath}/assets/dog-cat-result.jpeg`,
  },
  'sweetheart-bestie': {
    description: 'Sweetheart Bestie',
    imgSrc: `${basePath}/assets/dog-cat-result.jpeg`,
  },
  'zen-bestie': {
    description: 'Zen Bestie',
    imgSrc: `${basePath}/assets/dog-cat-result.jpeg`,
  },
  'plain-water-bestie': {
    description: 'Plain Water Bestie',
    imgSrc: `${basePath}/assets/dog-cat-result.jpeg`,
  },
};

export async function generateStaticParams() {
  const total = [
    { id: 'bos-bestie' },
    { id: 'vain-pot-bestie' },
    { id: 'smart-alec-bestie' },
    { id: 'high-maintenance-bestie' },
    { id: 'siao-onz-bestie' },
    { id: 'sweetheart-bestie' },
    { id: 'zen-bestie' },
    { id: 'plain-water-bestie' },
  ];
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
  const imgSrc: string = config[params.id].imgSrc;

  return (
    <div className={styles['congratulation']}>
      <CustomImage src={imgSrc} alt={'congratulation'} />
      <DownloadImg urlImg={imgSrc} imageName={basePath} />
      <Share urlShare={`https://matthew-wearesection.github.io/my-best-t/result/${params.id}`} />
    </div>
  );
}
