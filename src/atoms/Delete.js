import style from '../styles/atoms.module.css'

function Delete({ onChange }) {
    return (
        <button className={`${style.button} ${style.delete}`} onClick={onChange}>
            Delete
        </button>
    );
}

export default Delete;