import '../src/scss/style.scss';
import Main from './layouts/Home';
import GithubSearcher from './modules/GithubSearcher';

function App() {
  const search = new GithubSearcher('');
  return (
    <Main searcher={search}/>
  );
}

export default App;
