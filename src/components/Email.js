import Loading from './Loading';

function Email(props) {
    const [formErrors, setFormErrors] = [props.formErrors, props.setFormErrors];
    const loading = props.loading;
    const setEmail = props.setEmail;

    const validateEmail = (e) => {
        const email = e.target.value;
        const emailIsValid = RegExp(/^\S+@\S+\.\S\S+/).test(email);
        !emailIsValid 
        ? setFormErrors({...formErrors, email: true})
        : setFormErrors({...formErrors, email: false});
    }
    return (
        <>
            <input 
                type="email" 
                placeholder="Your email (optional)" 
                name="email" 
                onChange={e => setEmail(e.target.value)}
                onBlur={e => validateEmail(e)}                        
                />
            <div>{ loading && <Loading />}</div>
            { formErrors.email && <p>Please enter a valid email</p> }
        </>
    )
}

export default Email;