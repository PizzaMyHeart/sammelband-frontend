import { useState } from 'react';

function Signup(props) {
    const [newPassword, setNewPassword] = useState(null);
    const [newEmail, setNewEmail] = useState(null);
    const [formErrors, setFormErrors] = [props.formErrors, props.setFormErrors];

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

    const validateEmail = (e) => {
        const email = e.target.value;
        const emailIsValid = RegExp(/^\S+@\S+\.\S\S+/).test(email);
        !emailIsValid 
        ? setFormErrors({...formErrors, email: true})
        : setFormErrors({...formErrors, email: false});
    }

    return (
        <>  
            <h4>Sign up</h4>
            <form onSubmit={ handleSubmit }>
                <div>Email: 
                    <input 
                        type="email" 
                        onChange={ e => setNewEmail(e.target.value) }
                        onBlur={e => validateEmail(e)} 
                        />
                </div>
                <div>Password: <input type="password" onChange={ e => setNewPassword(e.target.value) }/></div>
                <input type="submit" value="Sign up"/>
                { formErrors.email && <p>Please enter a valid email address.</p> }
            </form>
        </>
    )
}

export default Signup;