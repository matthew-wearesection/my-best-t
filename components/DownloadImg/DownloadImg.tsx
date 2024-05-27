'use client';
import React from 'react';
import styles from './DownloadImg.module.scss';

export const DownloadImg: React.FC<{ urlImg: string; imageName: string }> = ({ urlImg, imageName = 'result' }) => {
  const download = (filename: string, content: string) => {
    var element = document.createElement('a');
    element.setAttribute('href', content);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleDownload = async (e: any) => {
    try {
      const result = await fetch(urlImg, {
        method: 'GET',
        headers: {},
      });
      const blob = await result.blob();
      const url = URL.createObjectURL(blob);
      download(imageName, url);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button className={styles['button-download']} onClick={handleDownload} type="button">
      Download
    </button>
  );
};
