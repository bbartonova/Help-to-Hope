import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {
  return (
    <header className="font-title bg-grey-dark">
      <ul className="m-0">
        {!props.isLandingPage && (
          <li className="w-1/3">
            <Link href="/">
              <a>úvod</a>
            </Link>
          </li>
        )}
        <li className="flex justify-center items-center">
          <Link href="/">
            <a className="m-0">
              <Image
                src="/HtH_logo_rev_sm.png"
                alt="logo"
                layout="intrinsic"
                width={230}
                height={70}
              ></Image>{' '}
            </a>
          </Link>
        </li>
        {!props.isLandingPage && (
          <li>
            <Link href="https://www.facebook.com/HelptoHopeCZ/">
              <a>Facebook</a>
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}
