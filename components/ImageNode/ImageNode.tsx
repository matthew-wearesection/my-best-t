import React from 'react';
import { IImage } from '../ImageChooser/ImageChooser';
import styles from './ImageNode.module.scss';

interface ImageNodeProps {
  image: IImage;
  onSelect: (image: IImage) => void;
}

const ImageNode: React.FC<ImageNodeProps> = ({ image, onSelect }) => {
  const handleClick = () => {
    onSelect(image);
  };

  return (
    <div className={styles.container}>
      <img src={image.src} alt={image.alt} style={{}} onClick={handleClick} />
    </div>
  );
};

export default ImageNode;
