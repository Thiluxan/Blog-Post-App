import './App.css';
import MainPage from './components/MainPage';
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import User from './components/User'
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import{Container} from 'react-bootstrap'
import {AuthProvider} from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {

  return (
    <Container >
      <div>
        <Router>
          <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/home" component={MainPage} />
                <PrivateRoute exact path="/create" component={CreatePost} />
                <PrivateRoute exact path="/post/:id" component={Post}/>
                <PrivateRoute exact path="/profile" component={Dashboard} />
                <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/" component={Login}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
              </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
    {/*
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
    */}

}

export default App;
