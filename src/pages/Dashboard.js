import Header from '../organisms/Header';
import ArticleList from '../organisms/ArticleList';

function Dashboard({ articles }) {
    return (
        <div>
            <Header />
            <ArticleList articles={articles}/>
        </div>
    );
}

export default Dashboard;