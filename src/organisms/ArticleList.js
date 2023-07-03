import Article from './Article'
import style from '../styles/organisms.module.css'

function ArticleList({ articles }) {
    return (
        <div className={style.article_list}>
            {
                articles.map((article, index) => (
                    <Article 
                        title = {article.title}
                        author = {article.author}
                        date = {article.date}
                        content = {article.content}
                        tags = {["Sports", "Worldwide", "Local"]}
                        key = {index}
                    />
                ))
            }
        </div>
    );
}

export default ArticleList;