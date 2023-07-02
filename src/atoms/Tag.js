import style from '../styles/atoms.module.css'

function Tag(props) {
    return (
        <div className={`${style.button} ${style.tag}`}>
            {`#${props.tag}`}
        </div>
    );
}

export default Tag;