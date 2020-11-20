import './App.css';
import MainPage from './components/MainPage';
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import User from './components/User'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ProtectedRoute from './services/ProtectedRoute'

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={User}/>
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/post/:id" component={Post}/>
          <Route exact path="*" component={() => "404 ERROR NOT FOUND"}/>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
