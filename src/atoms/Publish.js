import style from '../styles/atoms.module.css'

function Publish() {
    return (
        <div className={`${style.button} ${style.publish}`}>
            Publish
        </div>
    );
}

export default Publish;