import style from '../styles/atoms.module.css'

function Delete() {
    return (
        <button className={`${style.button} ${style.delete}`}>
            Delete
        </button>
    );
}

export default Delete;