import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

export default function Header(props) {
  return (
    <header className={styles.header}>
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
            <a>
              <Image
                src="/HTH_logo_rev_sm.png"
                alt="logo"
                width={115}
                height={35}
              ></Image>{' '}
            </a>
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
