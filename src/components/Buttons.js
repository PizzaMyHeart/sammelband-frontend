import downloadIcon from '../icons/download.svg';
import mailIcon from '../icons/mail.svg';
import attachmentIcon from '../icons/paperclip.svg';
import trashIcon from '../icons/trash-2.svg'

function Buttons(props) {
    const download = () => {

        window.location = 'http://localhost:3001/download'
        /*
        fetch('/download', {
            method: 'GET',
            mode: 'cors'
        })
        */
    }

    const deleteFile = () => {
        fetch('/delete', {
            credentials: 'same-origin',
            method: 'GET',
            mode: 'cors',
        })
        .then(response => {
            if (response) {
                props.setDeleted(true);
                props.setSuccess(false);
            };
        });
    }

    const mail = data => {
        fetch('/mail', {
            credentials: 'same-origin',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data['email']
            })
        })
        .then(response => {
            if (response) {
                console.log('email sent');
                props.setEmailSent(true);
            }
        })
    }
    return (
        <>
            <button className="btn" onClick={ deleteFile } id="deleteBtn" disabled={ props.deleted || !props.success }>
                <img src={ trashIcon } alt="Trash can icon"/>
            </button>
            <button className="btn" onClick={ download } disabled={ !props.success }>
                <img src={ downloadIcon } alt="Download icon"/>
            </button>
            <button className="btn" onClick={ props.handleSubmit(mail) } disabled={ !props.success }>
                <img src={ mailIcon } alt="Mail icon"/>
            </button>
            <button className="btn" disabled={ !props.success }>
                <img src={ attachmentIcon } alt="Attachment icon"/>
            </button>
        </>
        
    )
}

export default Buttons;