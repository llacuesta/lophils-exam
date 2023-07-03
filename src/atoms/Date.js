import style from '../styles/atoms.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Date({ date }) {
    return (
        <div className={style.date}>
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>{date}</p>
        </div>
    );
}

export default Date;