import React from 'react';
import { CustomImage } from '../CustomImage/CustomImage';
import { IQuestion } from '../ImageChooser/ImageChooser';
import styles from './ImageNode.module.scss';
import cx from 'classnames';

interface ImageNodeProps {
  image: IQuestion['children'][0];
  onSelect: (image: IQuestion) => void;
  isTransformBackground?: boolean;
}

const ImageNode: React.FC<ImageNodeProps> = ({ isTransformBackground = true, image, onSelect }) => {
  const handleClick = () => {
    onSelect(image);
  };

  return (
    <div className={cx(styles.container, { [styles['transform']]: isTransformBackground })} onClick={handleClick}>
      <>
        <CustomImage
          containerProps={{ className: styles['image-wrapper'] }}
          fill={false}
          width={250}
          height={250}
          src={image.src}
          alt={image.alt}
        />
        <div className={styles[`description`]}>{image.description}</div>
      </>
    </div>
  );
};

export default ImageNode;
