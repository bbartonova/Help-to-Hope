import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from '../../libs/appContext';

export default function Helper(props) {
  const [isVisible, setIsVisible] = useState(false);
  const { setNameProjectLS } = useContext(AppContext);

  return (
    <div className={styles.project}>
      <div>
        <h2>
          Jméno a příjemní: {props.name} {props.lastname}
        </h2>
        <p>oblast: {props.businessField}</p>
        <p>Popis činnosti: {props.activityDescription}</p>
      </div>
      <div style={{ display: isVisible === false ? 'none' : null }}>
        <p>Odkazy: {props.links}</p>
        <p>Reference: {props.reference}</p>
        <p>Časové možnosti: {props.timeAvailability}</p>
        <p>Preferovaná oblast pomoci: {props.projectArea}</p>
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible === true
          ? `Skrýt informace o pomocníku`
          : `Další informace o pomocníku`}
      </button>
      <Link href={`/int_helper/${props.id}`}>
        <a onClick={() => setNameProjectLS(props.name + ' ' + props.lastname)}>
          Chci pomoct od pomocníka
        </a>
      </Link>
    </div>
  );
}
