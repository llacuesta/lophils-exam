import style from '../styles/atoms.module.css'

function Tag({ tag }) {
    return (
        <button className={`${style.button} ${style.tag}`}>
            {`#${tag}`}
        </button>
    );
}

export default Tag;