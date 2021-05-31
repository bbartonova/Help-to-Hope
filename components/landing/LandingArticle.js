import Link from 'next/link';

export default function LandingArticle(props) {
  return (
    <article style={{ textAlign: props.align }} className="px-8 w-1/3 flex-1">
      <h1 className="text-green text-5xl font-extralight">{props.title}</h1>
      <p className="text-grey-light text-4xl mb-12">{props.text}</p>
      <Link href={props.link}>
        <a className="border-green border-solid border-2 rounded-md bg-grey-light bg-opacity-25 text-grey-light text-xl hover:text-green hover:bg-opacity-100 p-2 font-extralight">
          Chci více informací
        </a>
      </Link>
    </article>
  );
}
