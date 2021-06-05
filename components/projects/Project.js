import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../../libs/appContext';

export default function Project(props) {
  const [isVisible, setIsVisible] = useState(false);

  const { setNameProjectLS } = useContext(AppContext);

  return (
    <div className="bg-grey-light p-8 w-3/4 rounded-xl mx-auto m-4 border-b-2 border-b-grey flex flex-col">
      <div className="flex flex-col">
        <h2 className="font-title text-green text-3xl py-4">
          Název: {props.name}
        </h2>
        <p className="font-body text-grey-dark text-base pb-3">
          oblast: {props.businessField}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Popis činnosti: {props.eactivityDescription}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Účel projektu: {props.projectPurpose}
        </p>
      </div>
      <div style={{ display: isVisible === false ? 'none' : null }}>
        <p className="font-body text-grey-dark text-base pb-3">
          Jméno a příjmení: {props.fullname}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Oragnizace: {props.organization}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Stávající web a další odkazy:
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          web: {props.oldWeb}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          další odkazy: {props.links}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Preference zkušeností: {props.experiences}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Možná odměna: {props.reward}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <button
          className="border-green border-solid border-2 rounded-md font-title text-grey-dark text-base flex hover:bg-green hover:bg-opacity-100 p-2 font-extralight mr-8 w-max sm:w-auto"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible === true
            ? `Skrýt informace o projektu`
            : `Další informace o projektu`}
        </button>
        <Link href={`/int_project/${props.id}`}>
          <a
            className="border-green border-solid border-2 rounded-md font-title text-grey-dark text-base flex hover:bg-green hover:bg-opacity-100 p-2 font-extralight w-max sm:w-auto mt-4 sm:mt-0"
            onClick={() => setNameProjectLS(props.name)}
          >
            Chci pomoct projektu
          </a>
        </Link>
      </div>
    </div>
  );
}
