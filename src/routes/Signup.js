import { useState } from 'react';

function Signup() {
    const [newPassword, setNewPassword] = useState(null);
    const [newEmail, setNewEmail] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_DOMAIN}/api/signup`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newEmail: newEmail,
                newPassword: newPassword,
            })
        })
        .then(response => {
            if (response.ok) {
                console.log(response.text());
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div>Email: <input type="email" onChange={ e => setNewEmail(e.target.value) }/></div>
                <div>Password: <input type="password" onChange={ e => setNewPassword(e.target.value) }/></div>
                <input type="submit" value="Sign up"/>
            </form>
        </>
    )
}

export default Signup;