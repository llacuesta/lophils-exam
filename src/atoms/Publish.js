import style from '../styles/atoms.module.css'

function Publish() {
    return (
        <button className={`${style.button} ${style.publish}`}>
            Publish
        </button>
    );
}

export default Publish;