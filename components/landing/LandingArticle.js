import Link from 'next/link';

export default function LandingArticle(props) {
  return (
    <article style={{ textAlign: props.align }} className="w-full p-8 sm:w-1/3">
      <h1 className="text-green font-title text-5xl font-extralight">
        {props.title}
      </h1>
      <p className="text-grey-light font-title text-4xl mb-12">{props.text}</p>
      <Link href={props.link}>
        <a className="border-green border-solid border-2 rounded-md bg-grey-light bg-opacity-25 text-grey-light text-xl hover:text-green hover:bg-opacity-100 p-2 font-extralight font-title">
          Chci více informací
        </a>
      </Link>
    </article>
  );
}
