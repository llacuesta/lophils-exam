import style from '../styles/atoms.module.css'

function Tag({ tag }) {
    return (
        <div className={`${style.button} ${style.tag}`}>
            {`#${tag}`}
        </div>
    );
}

export default Tag;