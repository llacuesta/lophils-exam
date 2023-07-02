import style from '../styles/atoms.module.css'

function Delete() {
    return (
        <div className={`${style.button} ${style.delete}`}>
            Delete
        </div>
    );
}

export default Delete;