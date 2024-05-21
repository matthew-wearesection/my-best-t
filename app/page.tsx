import { ImageChooser } from '../components/ImageChooser/ImageChooser';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageChooser />
    </main>
  );
}
