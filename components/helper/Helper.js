import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../../libs/appContext';

export default function Helper(props) {
  const [isVisible, setIsVisible] = useState(false);
  const { setNameProjectLS } = useContext(AppContext);

  return (
    <div className="bg-grey-light p-8 w-3/4 rounded-xl mx-auto m-4 border-b-2 border-b-grey flex flex-col">
      <div className="flex flex-col">
        <h2 className="font-title text-green text-3xl py-4">
          Jméno: {props.name} {props.lastname}
        </h2>
        <p className="font-body text-grey-dark text-base pb-3">
          Oblast činnosti: {props.businessField}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Popis činnosti: {props.activityDescription}
        </p>
      </div>
      <div style={{ display: isVisible === false ? 'none' : null }}>
        <p className="font-body text-grey-dark text-base pb-3">
          Odkazy: {props.links}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Reference: {props.reference}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Časové možnosti: {props.timeAvailability}
        </p>
        <p className="font-body text-grey-dark text-base pb-3">
          Preferovaná oblast pomoci: {props.projectArea}
        </p>
      </div>
      <div>
        <button
          className="border-green border-solid border-2 rounded-md font-title text-grey-dark text-base  hover:bg-green hover:bg-opacity-100 p-2 font-extralight mr-8"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible === true
            ? `Skrýt další informace`
            : `Zobrazit další informace`}
        </button>
        <Link href={`/int_helper/${props.id}`}>
          <a
            className="border-green border-solid border-2 rounded-md font-title text-grey-dark text-base  hover:bg-green hover:bg-opacity-100 p-2 font-extralight"
            onClick={() => setNameProjectLS(props.name + ' ' + props.lastname)}
          >
            Mám zájem o spolupráci
          </a>
        </Link>
      </div>
    </div>
  );
}
