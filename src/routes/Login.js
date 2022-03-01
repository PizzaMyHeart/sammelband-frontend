import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = [props.email, props.setEmail];

    const [loggedIn, setLoggedIn] = [props.loggedIn, props.setLoggedIn];
    const [loginError, setLoginError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_DOMAIN}/api/login`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.ok) {
                console.log(response);
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            if (data.loggedIn === true) {
                setLoggedIn(true);
                setEmail(data.email);
                window.location = '/';
            } else if (data.loggedIn === false) {
                setLoginError(true);
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <h4>Log in</h4>
            <form onSubmit={ handleSubmit }>
                <div>Email: <input type="email" onChange={ e => setEmail(e.target.value)}/></div>
                <div>Password: <input type="password" onChange={ e => setPassword(e.target.value)}/></div>

                <input type="submit" value="Log in"></input>
            </form>
            { loginError && <p>Please try again. </p>}
            <div>Don't have an account? <Link to="/signup">Sign up</Link> instead.</div>
        </>
    )
}

export default Login;