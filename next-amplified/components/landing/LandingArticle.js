import Link from 'next/link';
import styles from '../../styles/LandingArticle.module.scss';

export default function LandingArticle(props) {
  return (
    <article className={styles.article} style={{ textAlign: props.align }}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <Link href={props.link}>
        <a>Chci více informací</a>
      </Link>
    </article>
  );
}
