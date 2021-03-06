import { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import Logout from './Logout';
import Email from './Email';
import Pocket from './Pocket';
import UrlContainer from './UrlContainer';
import ResendVerification from './ResendVerification';
import Loading from './Loading';


function Form(props) {
    const [success, setSuccess] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formErrors, setFormErrors] = [props.formErrors, props.setFormErrors];
    const [badUrls, setBadUrls] = useState(null);
    const [mailError, setMailError] = useState(false);
    const [pocketList, setPocketList] = useState(null);
    const [pocketLoggedIn, setPocketLoggedIn] = [props.pocketLoggedIn, props.setPocketLoggedIn]
    const [loggedIn, setLoggedIn] = [props.loggedIn, props.setLoggedIn]; // App login state
    const loggedInAs = props.loggedInAs // Display name
    const verified = props.verified;

    // Form data
    const [userUrls, setUserUrls] = useState({0: ''});
    const [pocketUrls, setPocketUrls] = useState([]);
    const [color, setColor] = useState('light');
    const [font, setFont] = useState('sansSerif');
    const [format, setFormat] = useState('html');
    const [email, setEmail] = [props.email, props.setEmail];
    


    
    const allUrls = Object.values(userUrls).concat(pocketUrls).filter(item => item !== ''); // '' Gets saved as a url in the state array. Remove this. 
    
    //console.log(allUrls);
    // Form validation
    //console.log(allUrls);
    const formIsValid = (formErrors.url.length === 0 
        && formErrors.email === false
        && allUrls.length > 0);

    //console.log('Form is Valid: ', formIsValid);


   
    const handleSubmit = (e) => {    
        e.preventDefault(); // <--- This is essential    
        // Prevent submit if no URLs are supplied
        
        if (allUrls.length < 1) {
            setSubmitError('Please submit at least one URL.');
            return;
        }
        if (!formIsValid) return;
        //console.log(allUrls.length);
        setLoading(true);
        setSuccess(false);
        setDeleted(false);
        setBadUrls(null);
        setEmailSent(false);
        fetch(`${process.env.REACT_APP_API_DOMAIN}/api/submit`, {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                urls: allUrls,
                color: color,
                font: font,
                format: format,
                email: email,
                date: new Date().toUTCString()
            })
        })
        .then(response => {
            setDeleted(false);
            if (response.ok) {
                setSuccess(true);
                setLoading(false);
                setSubmitError(null);
                return response.json()
            } else {
                setLoading(false);
                //console.log('Unsuccesful submit');
                response.text().then(text => setSubmitError(text));
            }
        })
        .then(data => {
            if (data.malformedUrl) {
                setBadUrls(data.malformedUrl);
            }
        })
        .catch(err => console.log(err));
    }

    const setRadioValues = (e) => {
        const value = e.target.value
        //console.log(value);
        switch(e.target.name) {
            case 'color':
                setColor(value);
                break;
            case 'font':
                setFont(value);
                break;
            case 'format':
                setFormat(value);
                break;

            // no default
        } 
        
    }



    return ( 
        <> 
            {loggedIn 
            ? <div id="logged-in-container"><p>Logged in as { loggedInAs }.</p> <Logout setLoggedIn={ setLoggedIn }/></div>
            : <Link to="/login">Log in</Link>}
            <form onSubmit={ handleSubmit }> 
            { !verified && loggedIn && <div id="logged-in-container"><p className="small-text">Unverified</p><ResendVerification /></div>}
                <label>
                    URLs
                    <div className="small-text">Prefixed with http(s)</div>
                    <UrlContainer 
                        userUrls={ userUrls }
                        setUserUrls={ setUserUrls }
                        formErrors={ formErrors }
                        setFormErrors={ setFormErrors }
                    />            
                </label>
                <Pocket 
                    pocketList={ pocketList }
                    setPocketList={ setPocketList }
                    pocketLoggedIn= { pocketLoggedIn }
                    setPocketLoggedIn={ setPocketLoggedIn }
                    pocketUrls={ pocketUrls }
                    setPocketUrls={ setPocketUrls }
                    setLoading={ setLoading }
                />
                <div>
                    <input type="radio" value="light" defaultChecked name="color" onChange={ setRadioValues }/> Light mode
                    <input type="radio" value="dark" name="color" onChange={ setRadioValues }/> Dark mode
                </div>
                <div>
                    <input type="radio" value="sansSerif" defaultChecked name="font" onChange={ setRadioValues }/> Sans-serif
                    <input type="radio" value="serif" name="font" onChange={ setRadioValues }/> Serif
                </div>
                <div> 
                    <input type="radio" value="html" defaultChecked name="format" onChange={ setRadioValues }/> HTML
                    <input type="radio" value="pdf" name="format" onChange={ setRadioValues }/> PDF 
                    <input type="radio" value="epub" name="format" onChange={ setRadioValues }/> EPUB
                </div>

                <div>
                
                { 
                    !(loggedIn && verified) &&
                    
                    <Email 
                        formErrors={ formErrors } setFormErrors={ setFormErrors }
                        loading={ loading } 
                        setEmail= { setEmail }
                    />
                }
                <input type="submit" value="Submit" />
                </div>
                { loading && <Loading />}
                <div id="messages">
                    <div id="error-messages">
                        { submitError && <p>{ submitError }</p>}
                        { badUrls && <p>Invalid URLs not processed: { badUrls }</p> }
                        { mailError && <p>{ mailError }</p>}
                    </div>
                    <div>
                        { success && <p>Sammelband ready</p> }
                        { deleted && <p className="fade-out">Sammelband deleted</p>}
                        { emailSent && <p>Sammelband sent to { email }</p>}
                    </div>
                </div>
                
            </form>

            <Buttons
                success={ success } 
                setSuccess={ setSuccess }
                deleted={ deleted }
                setDeleted={ setDeleted }
                emailSent={ emailSent }
                setEmailSent={ setEmailSent }
                setMailError={ setMailError }
                setLoading={ setLoading }
            />        
        </>
    )
}

export default Form;