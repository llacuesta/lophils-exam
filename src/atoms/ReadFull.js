import { useState } from 'react'
import style from '../styles/atoms.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import ArticleModal from '../organisms/ArticleModal'

function ReadFull({ title, author, date, content }) {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <>
            <button className={style.read_full} onClick={openModal}>
                <FontAwesomeIcon icon={faEye} />
                <p>Read Full</p>
            </button>

            {showModal && (
                <ArticleModal 
                    title = {title}
                    author = {author}
                    date = {date}
                    content = {content}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </>
    
    );
}

export default ReadFull;