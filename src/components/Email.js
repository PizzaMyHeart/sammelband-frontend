import Loading from './Loading';

function Email(props) {
    const [formErrors, setFormErrors] = [props.formErrors, props.setFormErrors];
    const loading = props.loading;
    const setEmail = props.setEmail;

    const validateEmail = (e) => {
        const email = e.target.value;
        // Only accept emails from mail.tm, Guerrilla Mail, and temp-mail.org
        // or match empty string
        const emailIsValid = RegExp(/^$|(\S+@((midiharmonica|sharklasers|robhung)\.com|(guerrillamail\S*\.\S+)|(spam4\.me)|(pokemail\.net)|(grr\.la))$)/)
                            .test(email);
        !emailIsValid 
        ? setFormErrors({...formErrors, email: true})
        : setFormErrors({...formErrors, email: false});
    }
    return (
        <>
            <input 
                type="email" 
                placeholder="Temporary email" 
                name="email" 
                onChange={e => setEmail(e.target.value)}
                onBlur={e => validateEmail(e)}                        
                />
            <a href="/about/#supported-temp-emails">Supported emails</a>
            <div>{ loading && <Loading />}</div>
            { formErrors.email && <p>Please enter a valid email</p> }
        </>
    )
}

export default Email;