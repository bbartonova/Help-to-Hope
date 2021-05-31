import Image from 'next/image';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout(props) {
  return (
    <div
      className={`${
        props.isLandingPage &&
        'bg-index-background bg-no-repeat bg-cover h-screen flex flex-col justify-between'
      }`}
    >
      <Header isLandingPage={props.isLandingPage} />
      {props.children}
      <Footer />
    </div>
  );
}
