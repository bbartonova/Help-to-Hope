import Image from 'next/image';
import styles from '../../styles/Layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout(props) {
  return (
    <div
      className={`${
        props.isLandingPage &&
        'bg-index-background bg-no-repeat bg-cover h-screen flex flex-col'
      }`}
    >
      <Header isLandingPage={props.isLandingPage} />
      {props.children}
      <Footer />
    </div>
  );
}
