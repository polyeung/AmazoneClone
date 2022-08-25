import React ,{useState}from 'react'
import './Login.css';
import ama_logo from './login_logo.jpeg'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
   const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const signIn = e =>{
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.go("/")
        })
        .catch(error => alert(error.message))
        

    }

    const register = e =>{
      e.preventDefault();

      auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              // it successfully created a new user with email and password
             if(auth){
              history.go("/")
            }
            
          })
          .catch(error => alert(error.message))
        
        
    }
  return (
    <div className='login'>
    <Link to = '/'>
      <img src = {ama_logo} alt = "login_logo"
      className = "login__logo"/>
      </Link>

      <div className = "login__container">
        <h1>Sign in</h1>
        <form>
            <h5>E-mail: </h5>
            <input type = '†ext' value = {email} 
            onChange = {e => setEmail(e.target.value)}/>
            <h5>Password: </h5>
            <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>
            
            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>

            <p>This is just an AMAZONE_CLONE 
                developed by Yang from U of M. Please feel free to contact 
                me at ly842605942@gmail.com</p>
                <button onClick={register}
                className = 'login__registerButton' 
                >Create Your Amazone Account</button>
        </form>

      </div>

    </div>
  )
}

export default Login
