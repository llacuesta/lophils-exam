import style from '../styles/organisms.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Publish from '../atoms/Publish';
import Delete from '../atoms/Delete';

function ArticleModal({ title, author, date, content, closeModal }) {
    return (
        <div className={style.modal_overlay}>
            <div className={style.modal}>
                <div className={style.modal_content}>
                    <div className={style.modal_head}>
                        <p>{title}</p>
                        <button onClick={closeModal} className={style.modal_close}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <h3>{`${author} | ${date}`}</h3>
                    <div className={style.modal_body}>
                        <p>{content}</p>
                    </div>
                </div>
                <div className={style.modal_buttons}>
                    <Publish />
                    <Delete />
                </div>
            </div>
        </div>
    );
}

export default ArticleModal;