import {useEffect, useState} from 'react';
import axios from 'axios';

function User(props) {

  const[userReg, setUserReg] = useState('')
  const[passReg, setPassReg] = useState('')

  const[userLogin, setUserLogin] = useState('')
  const[passLogin, setPassLogin] = useState('')

  const [loginStatus, setLoginStatus] = useState('')
  axios.defaults.withCredentials = true

  const registerPerson = () => {
      axios.post('http://localhost:3001/register',{
        username:userReg,
        password:passReg,
      }).then(res => {
        window.location.reload(false);
      })
  }

  const login = () => {
    axios.post('http://localhost:3001/login',{
        username:userLogin,
        password:passLogin,
      }).then(response => {
        console.log(response.data)
        if(response.data.message) {
          setLoginStatus(response.data.message.toString());
        }
        else{
          props.history.push("/home")
        }
      })
  }

 useEffect(() => {
    axios.get('http://localhost:3001/login')
    .then(response => {
      console.log(response.data);
      /*setLoginStatus(response.data.username[username])
      if(response.data.loggedIn) {
        setLoginStatus(response.data.username[0].username);
      }*/
    })
 },[])

  return (
    <div>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label><br/>
        <input type="text" onChange={e => {setUserReg(e.target.value)}} /><br/>
        <label>Password</label><br/>
        <input type="password" onChange={e => {setPassReg(e.target.value)}}/><br/>
        <button onClick={registerPerson}>Register</button>
      </div>
      <div className="login">
        <input type="text"  placeholder="username" onChange={e => {setUserLogin(e.target.value)}}/><br/>
        <input type="password" placeholder="password" onChange={e => {setPassLogin(e.target.value)}}/><br/>
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default User;
