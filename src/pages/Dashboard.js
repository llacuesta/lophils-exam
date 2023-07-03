import ArticleList from '../organisms/ArticleList';

function Dashboard({ articles }) {
    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    );
}

export default Dashboard;