import ArticleList from '../organisms/ArticleList';

function Dashboard({ articles, onClick }) {
    return (
        <div>
            <ArticleList articles={articles} onClick={onClick} />
        </div>
    );
}

export default Dashboard;