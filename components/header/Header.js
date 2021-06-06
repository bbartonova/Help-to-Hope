import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {
  return (
    <header className="bg-grey-dark flex justify-center px-8">
      {props.isLandingPage && (
        <Image
          src="/logo_hth.jpg"
          alt="logo"
          layout="intrinsic"
          width={230}
          height={70}
        ></Image>
      )}
      {!props.isLandingPage && (
        <nav className="w-full flex items-center flex-col justify-center sm:justify-between md:flex-row">
          <Link href="/" className="flex sm:flex justify-start">
            <a className="m-0">
              <Image
                src="/logo_hth.jpg"
                alt="logo"
                layout="intrinsic"
                width={230}
                height={70}
              ></Image>
            </a>
          </Link>

          <ul className="flex flex-col items-center sm:flex sm:flex-row sm:justify-end m-0">
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

            <li className="text-2xl mx-4 pb-4 md:pb-0">
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
