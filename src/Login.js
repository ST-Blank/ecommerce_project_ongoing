import React, { useState } from 'react';
import './Login.css'
import homeimg from './amazon_logo/homeimg.png';
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className="home_logo" src={homeimg} alt="logo" />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to  Conditions of Use & Sale. 
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login 
