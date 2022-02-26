import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

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
        </>
    )
}

export default Login;