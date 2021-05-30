import Link from 'next/link';
import styles from '../../styles/Footer.module.scss';
import Header from '../header/Header';

export default function Footer(props) {
  return (
    <footer className="bg-grey-dark px-8 flex justify-between">
      <div className="flex flex-row justify-between h-14 content-center w-full">
        <div className="text-2xl mx-4 flex content-center">
          <Link href="/o_projektu">
            <a className="text-grey-light font-title flex items-center hover:text-green-dark">
              O projektu
            </a>
          </Link>
        </div>
        <div className="text-2xl mx-4 flex content-center">
          <Link href="/gdpr">
            <a className="text-grey-light font-title flex items-center hover:text-green-dark">
              Soukromí a cookies
            </a>
          </Link>
        </div>
        <div className="text-2xl mx-4 flex content-center">
          <Link href="/reference">
            <a className="text-grey-light font-title flex items-center hover:text-green-dark">
              Reference
            </a>
          </Link>
        </div>
        <div className="text-2xl mx-4 flex content-center">
          <Link href="/kontakty">
            <a className="text-grey-light font-title flex items-center hover:text-green-dark">
              Kontakty
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
