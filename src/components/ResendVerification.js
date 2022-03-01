function ResendVerification() {
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_DOMAIN}/api/send-verification`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
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
            <button className="button-with-text" onClick={ handleClick }><p>[Re-send email verification link]</p></button>
        </>
    )
}

export default ResendVerification;