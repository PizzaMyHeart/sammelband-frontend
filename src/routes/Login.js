import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = [props.email, props.setEmail];

    const [loggedIn, setLoggedIn] = [props.loggedIn, props.setLoggedIn];

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
                username: username,
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
                
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div>Username: <input type="text" onChange={ e => setUsername(e.target.value)}/></div>
                <div>Password: <input type="password" onChange={ e => setPassword(e.target.value)}/></div>

                <input type="submit" value="Login"></input>
            </form>
            <div>Don't have an account? <Link to="/signup">Sign up</Link> instead.</div>
        </>
    )
}

export default Login;