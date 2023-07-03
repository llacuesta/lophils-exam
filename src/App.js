import './App.css';
import mock_data from './ARTICLES.json'
import Dashboard from './pages/Dashboard';

const ARTICLES = mock_data;

function App() {
  return (
    <div className="App">
      <Dashboard articles={ARTICLES} />
    </div>
  );
}

export default App;
