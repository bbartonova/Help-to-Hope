import Image from 'next/image';
import styles from '../../styles/Layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Header isLandingPage={props.isLandingPage} />
      {props.children}
      <Footer />
    </div>
  );
}
