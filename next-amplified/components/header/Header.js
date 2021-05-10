import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

export default function Header(props) {
  return (
    <header>
      <ul>
        {!props.isLandingPage && (
          <li>
            <Link href="/">
              <a>úvod</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/">
            <a>LOGO</a>
          </Link>
        </li>
        {!props.isLandingPage && (
          <li>
            <Link href="/">
              <a>facebook</a>
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}
