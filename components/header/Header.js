import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {
  return (
    <header className="bg-grey-dark flex justify-center px-8">
      {props.isLandingPage && (
        <Image
          src="/HtH_logo_rev_sm.png"
          alt="logo"
          layout="intrinsic"
          width={230}
          height={70}
        ></Image>
      )}
      {!props.isLandingPage && (
        <nav className="w-full flex items-center justify-between">
          <Link href="/" className="flex justify-start">
            <a className="m-0">
              <Image
                src="/HtH_logo_rev_sm.png"
                alt="logo"
                layout="intrinsic"
                width={230}
                height={70}
              ></Image>
            </a>
          </Link>

          <ul className="flex justify-end m-0">
            <li className="text-2xl mx-4">
              <Link href="/">
                <a className="text-grey-light font-title flex items-center hover:text-green-dark">
                  domů
                </a>
              </Link>
            </li>

            <li className="text-2xl mx-4">
              <Link href="/projects">
                <a className="text-grey-light font-title flex items-center hover:text-green-dark">
                  potřebuji pomoct
                </a>
              </Link>
            </li>

            <li className="text-2xl mx-4">
              <Link href="/helper">
                <a className="text-grey-light font-title flex items-center hover:text-green-dark">
                  nabízím pomoc
                </a>
              </Link>
            </li>

            <li className="text-2xl mx-4">
              <Link href="https://www.facebook.com/HelptoHopeCZ/">
                <a className="flex items-center hover:bg-green-dark">
                  <Image
                    src="/facebook-square-brands.svg"
                    alt="facebook"
                    layout="intrinsic"
                    width={30}
                    height={30}
                  ></Image>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
