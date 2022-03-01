function Logout(props) {
    const setLoggedIn = props.setLoggedIn;

    const logout = () => {
        fetch(`${process.env.REACT_APP_API_DOMAIN}/api/logout`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
        })
        .then(response => {
            if (response) {
                setLoggedIn(false);
                window.location = '/';
            }
        })
    }

    return (
        <>
            <button onClick={ logout }>Log out</button>
        </>
    )
};

export default Logout;