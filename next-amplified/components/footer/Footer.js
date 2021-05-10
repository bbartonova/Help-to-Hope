import Link from 'next/link';
import styles from '../../styles/Footer.module.scss';
import Header from '../header/Header';

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/o_projektu">
            <a>o projektu</a>
          </Link>
          <Link href="/">
            <a>GDPR</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>reference</a>
          </Link>
          <Link href="/">
            <a>archiv</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>kontakty</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
