import { CustomImage } from '@/components/CustomImage/CustomImage';
import { DownloadImg } from '@/components/DownloadImg/DownloadImg';
import { Share } from '@/components/Share/Share';
import styles from '@/styles/result.module.scss';
import { Metadata } from 'next';

const basePath = '/my-best-t/assets/result';

const config: Record<string, Metadata | any> = {
  'bos-bestie': {
    description: 'Bos$-y Bestie',
    imgSrc: `${basePath}/bos-bestie.png`,
    openGraph: {
      title: 'Bos$-y Bestie',
      description: 'Bos$-y Bestie my best "T"',
      images: [`${basePath}/bos-bestie.png`],
    },
  },
  'vain-pot-bestie': {
    description: 'Vain Pot Bestie',
    imgSrc: `${basePath}/vain-pot.png`,
    openGraph: {
      title: 'Vain Pot Bestie',
      description: 'Vain Pot Bestie my best "T"',
      images: [`${basePath}/vain-pot.png`],
    },
  },
  'smart-alec-bestie': {
    description: 'Smart Alec Bestie',
    imgSrc: `${basePath}/smart-alec.png`,
    openGraph: {
      title: 'Smart Alec Bestie',
      description: 'Smart Alec Bestie my best "T"',
      images: [`${basePath}/smart-alec.png`],
    },
  },
  'high-maintenance-bestie': {
    description: 'High Maintenance Bestie',
    imgSrc: `${basePath}/high.png`,

    openGraph: {
      title: 'High Maintenance Bestie',
      description: 'High Maintenance Bestie my best "T"',
      images: [`${basePath}/high.png`],
    },
  },
  'siao-onz-bestie': {
    description: 'Siao Onz Bestie',
    imgSrc: `${basePath}/siao-onz.png`,
    openGraph: {
      title: 'Siao Onz Bestie',
      description: 'Siao Onz Bestie my best "T"',
      images: [`${basePath}/siao-onz.png`],
    },
  },
  'sweetheart-bestie': {
    description: 'Sweetheart Bestie',
    imgSrc: `${basePath}/sweetheart.png`,
    openGraph: {
      title: 'Sweetheart Bestie',
      description: 'Sweetheart Bestie my best "T"',
      images: [`${basePath}/sweetheart.png`],
    },
  },
  'zen-bestie': {
    description: 'Zen Bestie',
    imgSrc: `${basePath}/zen.png`,
    openGraph: {
      title: 'Zen Bestie',
      description: 'Zen Bestie my best "T"',
      images: [`${basePath}/zen.png`],
    },
  },
  'plain-water-bestie': {
    description: 'Plain Water Bestie',
    imgSrc: `${basePath}/plain.png`,
    openGraph: {
      title: 'Plain Water Bestie',
      description: 'Plain Water Bestie my best "T"',
      images: [`${basePath}/plain.png`],
    },
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
      <CustomImage style={{ objectFit: 'contain' }} src={imgSrc} alt={'congratulation'} />
      <DownloadImg urlImg={imgSrc} imageName={basePath} />
      <Share urlShare={`https://matthew-wearesection.github.io/my-best-t/result/${params.id}`} />
    </div>
  );
}
