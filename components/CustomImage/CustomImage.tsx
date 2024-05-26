import Image, { ImageProps } from 'next/image';
import styles from './CustomImage.module.scss';

type TImageProps = {
  containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  src: string;
} & ImageProps;
export const CustomImage: React.FC<TImageProps> = ({ src, containerProps, ...restProps }) => {
  return (
    <div {...containerProps} className={`${styles['image-container']} ${containerProps?.className}`}>
      <Image src={src} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" {...restProps} />
    </div>
  );
};
