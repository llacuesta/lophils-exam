import style from '../styles/organisms.module.css';
import Author from '../atoms/Author';
import Date from '../atoms/Date';
import ReadFull from '../atoms/ReadFull';
import Tags from '../molecules/Tags';

function Article({ title, author, date, content, tags }) {
    return (
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
                    <ReadFull 
                        title = {title}
                        author = {author}
                        date = {date}
                        content = {content}
                    />
                </div>
            </div>
            <Tags tags={tags} />
        </div>
    );
}

export default Article;