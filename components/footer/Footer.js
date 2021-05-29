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
          <Link href="/gdpr">
            <a>GDPR</a>
          </Link>
        </li>
        <li>
          <Link href="/reference">
            <a>reference</a>
          </Link>
          <Link href="/archiv">
            <a>archiv</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakty">
            <a>kontakty</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
