import UrlField from './UrlField';

function UrlContainer(props) {
    const [userUrls, setUserUrls] = [props.userUrls, props.setUserUrls];
    const [formErrors, setFormErrors] = [props.formErrors, props.setFormErrors];

    const insertUrlField = () => {
        let newUrls = {...userUrls};
        const urlCount = Object.keys(userUrls).length;
        newUrls[urlCount] = '';
        setUserUrls(newUrls);
    }



    return (
        <>
            <button type="button" onClick={ insertUrlField }>Add URL</button>
            <div className="scrolling-div">
                {
                    Object.keys(userUrls).map(key => {
                        //console.log(key);
                        return (
                            <UrlField 
                                key={ key }
                                id={ key }
                                userUrls={ userUrls }
                                setUserUrls={ setUserUrls }
                                url={ userUrls[key] }
                                formErrors={ formErrors }
                                setFormErrors={ setFormErrors }
                            />
                        )
                        })
                }
            </div>
        </>
    )
};

export default UrlContainer;