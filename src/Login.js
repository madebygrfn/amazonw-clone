import React, { useState } from 'react';
import './Login.css';
import loginlogo from '../src/images/login_logo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message) )
    }


  return (
    <div className='login'>
    <Link to='/'>
        <img 
            className='login__logo' 
            src={loginlogo} alt=''/>
    </Link>

    <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange=
            {e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} 
            onChange={e => setPassword(e.target.value)}/>

            <button 
            type='submit'
            onClick={signIn}
            className='login__signInButton'>Sign in</button>
        </form>
        
        <p>
            By signing-in you agree to Amazon's Clone
            Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice
            and our Interest-Based Ads Notice.
        </p>

        <button 
        onClick={register}
        className='login__registerButton'>Create Your Amazon Clone Account</button>
    </div>
    </div>
  )
}

export default Login