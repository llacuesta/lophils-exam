import style from '../styles/atoms.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Author({ author }) {
    return (
        <div className={style.author}>
            <FontAwesomeIcon icon={faCircleUser} />
            <p>{author}</p>
        </div>
    );
}

export default Author;