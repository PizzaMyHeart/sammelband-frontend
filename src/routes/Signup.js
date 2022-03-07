import { useState } from 'react';
import ResendVerification from '../components/ResendVerification';

function Signup() {
    const [newEmail, setNewEmail] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    
    const [signupError, setSignupError] = useState({email: false, password: false});
    
    
    const [success, setSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newEmail) {
            setSignupError({...signupError, email: true});
        } else if (!newPassword) {
            setSignupError({...signupError, password: true});
        }
        
        if (!newEmail || !newPassword) return;
        if (Object.values(signupError).includes(false)) return;
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
                setSuccess(true);
            } 
        })
        .catch(err => console.log(err));
    }

    const validateEmail = (e) => {
        const email = e.target.value;
        const emailIsValid = RegExp(/^\S+@\S+\.\S\S+/).test(email);
        !emailIsValid 
        ? setSignupError({...signupError, email: true})
        : setSignupError({...signupError, email: false});
    }

    const validatePassword = (e) => {
        const password = e.target.value;
        const passwordIsValid = RegExp(/^\S+$/).test(password);
        !passwordIsValid 
        ? setSignupError({...signupError, password: true})
        : setSignupError({...signupError, password: false});
    }
    return (
        <>  
            <h4>Sign up</h4>
            <form onSubmit={ handleSubmit }>
                <div>
                    <input 
                        type="email" 
                        placeholder="Your email"
                        onChange={ e => setNewEmail(e.target.value) }
                        onBlur={e => validateEmail(e)} 
                        />
                    { signupError.email && <p>Please enter a valid email address.</p> }
                </div>
                
                <div>
                    <input 
                        type="password" 
                        placeholder="Choose a password"
                        onChange={ e => setNewPassword(e.target.value) }
                        onBlur={ e => validatePassword(e) }
                        />
                    { signupError.password && <p>Please choose a valid password. No whitespace characters.</p>}
                </div>
                <input type="submit" value="Sign up"/>
                
                { success && 
                    <div>
                        <p>Verification email sent. Please check your inbox at { newEmail }</p>
                        <ResendVerification />
                    </div>
                }
            </form>
        </>
    )
}

export default Signup;