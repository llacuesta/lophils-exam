import style from '../styles/organisms.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Author from '../atoms/Author';
import Date from '../atoms/Date';
import Tags from '../molecules/Tags';

function Article({ title, author, date, content, tags }) {
    return (
        <div className={style.article}>
            <div className={style.article_buttons}>
                <FontAwesomeIcon icon={faGripVertical} />
                <input type='checkbox' />
            </div>

            <div className={style.article_news}>
                <div className={style.article_news_info}>
                    <div className={style.article_news_head}>
                        <h3>{title}</h3>
                        <div className={style.article_news_head_info}>
                            <Author author={author}/>
                            <Date date={date}/>
                        </div>
                    </div>
                    <div className={style.article_news_desc}>
                        <p>{content.substring(0,80) + "..."}</p>
                        <div className={style.article_read_full}>
                            <FontAwesomeIcon icon={faEye} />
                            <p>Read Full</p>
                        </div>
                    </div>
                </div>
                <Tags tags={tags} />
            </div>
        </div>
    );
}

export default Article;