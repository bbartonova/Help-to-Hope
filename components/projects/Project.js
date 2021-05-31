import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../../libs/appContext';

export default function Project(props) {
  const [isVisible, setIsVisible] = useState(false);

  const { setNameProjectLS } = useContext(AppContext);

  return (
    <div>
      <div>
        <h2>Název: {props.name}</h2>
        <p>oblast: {props.businessField}</p>
        <p>Popis činnosti: {props.eactivityDescription}</p>
        <p>Účel projektu: {props.projectPurpose}</p>
      </div>
      <div style={{ display: isVisible === false ? 'none' : null }}>
        <p>Jméno a příjmení: {props.fullname}</p>
        <p>Oragnizace: {props.organization}</p>
        <p>Stávající web a další odkazy:</p>
        <p>
          web: {props.oldWeb}, další odkazy: {props.links}
        </p>
        <p>Preference zkušeností: {props.experiences}</p>
        <p>Možná odměna: {props.reward}</p>
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible === true
          ? `Skrýt informace o projektu`
          : `Další informace o projektu`}
      </button>
      <Link href={`/int_project/${props.id}`}>
        <a onClick={() => setNameProjectLS(props.name)}>Chci pomoct projektu</a>
      </Link>
    </div>
  );
}
