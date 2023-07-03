import style from '../styles/atoms.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function ReadFull() {
    return (
        <button className={style.read_full}>
            <FontAwesomeIcon icon={faEye} />
            <p>Read Full</p>
        </button>
    );
}

export default ReadFull;