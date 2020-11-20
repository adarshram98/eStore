import { Button } from '@material-ui/core'
import React ,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'


const Login = () => {
    
    const history = useHistory();
    //local states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        //prevent page refresh after submiting the form
        e.preventDefault();
        // login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in redirect to home page
        })
        .catch((e) => alert(e.message))

    }
    const register = (e) => {
        //prevent page refresh after submiting the form
        e.preventDefault();
        // register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // create a user and logged in.. and redirect to homepage
            history.push("/");//redirect
        })
        .catch((e) => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <h2 className="login__logo">eStore</h2>
            </Link>

            <div className="login__cont">
                <form action="">
                <h1>Sign in</h1>
                <h3>Email</h3>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h3>Password</h3>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit">Sign In</button>
                </form>
                <button onClick={register}>Create Account</button>
            </div>
        </div>
    )
}

export default Login
