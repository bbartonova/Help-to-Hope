import Link from 'next/link';
import styles from '../../styles/LandingArticle.module.scss';

export default function LandingArticle(props) {
  return (
    <article style={{ textAlign: props.align }}>
      <div className="flex flex-col justify-center h-full px-8">
        <h1 className="text-green text-5xl">{props.title}</h1>
        <p className="text-grey-light text-4xl">{props.text}</p>
        <Link href={props.link}>
          <a className="border-green border-solid border-2 rounded-md bg-grey-light bg-opacity-25 text-grey-light text-lg hover:text-green hover:bg-opacity-100 px-4">
            Chci více informací
          </a>
        </Link>
      </div>
    </article>
  );
}
