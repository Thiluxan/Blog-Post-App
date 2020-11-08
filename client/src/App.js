import './App.css';
import MainPage from './components/MainPage';
import CreatePost from './components/CreatePost'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/create">Create Post</a>
        </div>
      </div>
      <Router>
          <Route exact path="/" render={props => <MainPage />} />
          <Route exact path="/create" render={props => <CreatePost />} />
      </Router>
    </div>
  );
}

export default App;
