import Image from 'next/image';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout(props) {
  return (
    <div
      className={`${
        props.isLandingPage &&
        'bg-gradient-to-r from-grey-dark to-grey sm:bg-index-background sm:bg-top sm:bg-cover sm:bg-no-repeat sm:flex sm:flex-col sm:justify-between sm:h-screen'
      }`}
    >
      <Header isLandingPage={props.isLandingPage} />
      {props.children}
      <Footer />
    </div>
  );
}
