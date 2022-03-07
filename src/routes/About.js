import downloadIcon from '../icons/download.svg';
import mailIcon from '../icons/mail.svg';
import attachmentIcon from '../icons/paperclip.svg';
import trashIcon from '../icons/trash-2.svg';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>  
            <p>
                Sammelband is a an article-collation service. You feed it a bunch of article URLs 
                (or articles from your <a href="getpocket.com/">Pocket</a> list), 
                and get a single (HTML | PDF | EPUB) file&mdash;the titular virtual <a href="https://en.wikipedia.org/wiki/Sammelband" target="_blank" rel="noreferrer">sammelband</a>&mdash;in return. The web pages are processed 
                to extract the relevant content, which is then styled for a better reading experience. 
            </p>

            <p>
                Long trip coming up? 
                Now you can read all those long essays and internet manifestos you've had open in your browser for the last 
                three months. Put them all into a PDF which you can annotate to your heart's content. Email it to yourself. Print it on paper, even, if you're so inclined.
            </p>

            <p>
                Signing up for an account is optional. To prevent misuse of the email service, an account is required to receive sammelbands in your personal email inbox.
            </p>

            <h3>How</h3>
            <a href="https://github.com/PizzaMyHeart/sammelband-frontend#demo-video" target="_blank" rel="noreferrer">Demo video</a>
            <p>1. Supply one or more URLs manually or by connecting to your <a href="getpocket.com/">Pocket</a> account.</p>
            <p>2. Select style and format options for your sammelband. </p>
            <p>3. To receive the resulting file as an email or an email attachment</p>
            <p><i>Skip this step if you only need to download the sammelband to your device.</i></p>
            <ul>
                <li>Non-logged in users: use a temporary email address from one of the services listed <a href="#supported-temp-emails">below</a>.</li>
                <li>Logged in users: sammelbands will be sent to the email address you signed up with.</li>
            </ul>
            
            <p>4. Submit!</p>
            <p>5. Now you can perform any of the following actions: </p>
            
            <p><img src={ trashIcon } alt="Trash can icon"/> Delete the sammelband</p>
        
            <p><img src={ downloadIcon } alt="Download icon"/> Download the sammelband to your device</p>
        
            <p><img src={ mailIcon } alt="Mail icon"/> Send an email with the sammelband contents as the email body</p>
    
            <p><img src={ attachmentIcon } alt="Attachment icon"/> Send an email with the sammelband as a file attachment</p>

            <p><i>Note: Sammelband is NOT an archival service. Your sammelband is overwritten with every request and deleted from the server after some time.</i></p>
           

            <h4 id="supported-temp-emails">Supported temporary emails</h4>
            <p>Create an account to use your own email address. Otherwise, use a temporary email service from the list below.</p>
            <ul>
                <li><a href="https://mail.tm/en/" target="_blank" rel="noreferrer">mail.tm</a> (best option - applies Sammelband HTML styles)</li>
                <li><a href="https://temp-mail.org/en/" target="_blank" rel="noreferrer">temp-mail.org</a> (uses their own HTML styles)</li>
                <li><a href="https://www.guerrillamail.com" target="_blank" rel="noreferrer">Guerrilla Mail</a> (use unscrambled address)</li>
            </ul>
            
            <h3>Why?</h3>
            <p>
                There are many established players in the bookmarking/read-it-later space, such as Pocket,
                Instapaper, Pinboard, and <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=show%20hn%20bookmark&sort=byPopularity&type=story">
                    many more
                </a>.                
            </p>

            <p>So what's the point of Sammelband?</p>

            <p>Say I have a bunch of articles expounding the virtues or sins of Web 3.0. They may have accumulated in my Pocket list over some time, 
                or, more likely, in the midst of countless perpetually open browser tabs. Sammelband lets me stitch them all together into one file, which
                I'm hopefully more likely to actually sit down and read. I view Sammelband as a useful <i>augment</i> to my existing workflow of 
                [ article discovery ] → [ consumption ] → [ reflection ] → [ archival ].
            </p>

            <p>Ultimately, though, Sammelband is a personal experiment; it remains to be seen how useful it actually is. </p>

            <h3>Is this free?</h3>
            <p>Yes! This is a learning project that has been challenging enough without the overhead of running a business. </p>

            <p>That said, please consider <Link to="/donate">donating</Link> if you find this useful. Any amount will help offset hosting costs.</p>

            <h3>A note on privacy</h3>
            <h4>Cookies</h4>
            <p>This website uses cookies for session management (i.e. to ensure that sammelbands are sent to the right user, along with the correct user preferences). 
                No other tracking beyond that is implemented.
            </p>
            <h4>Personal information</h4>
            <p>
                If you create an account&mdash;which is entirely optional, as outlined above&mdash;your email address is stored on the server. 
                Account deletion is yet to be implemented but in the meantime please <a href="mailto:admin@sammelband.app">send me an email</a> if you would like to delete your account.
            </p>
            <h4>Web analytics</h4>
            <p>
                When you use this app, your public IP address (derived from standard HTTP request headers) is logged on the server. That's it.
            </p>

            <p>This is done to provide basic website traffic statistics and to prevent abuse.</p>
            
            <h3>ಠ_ಠ</h3>
            <h6>Known limitations</h6>
            <ul>
                <li>Sammelband styling is a work in progress</li>
                <li>Sammelband styling is inconsistent on some email clients</li>
                <li>The ordering of articles in a sammelband cannot be altered</li>
                <li>I'm still figuring out EPUB styling</li>
            </ul>
            <h6>Found a bug?</h6>
            <p>Please <a href="mailto:admin@sammelband.app">send me an email</a>.</p>
            <h6>Suggestions for improvement?</h6>
            <p>Please also <a href="mailto:admin@sammelband.app">send me an email</a>.</p>
            

            <h3>Technical stuff</h3>
            <h4>Back-end</h4>
            <a href="https://github.com/PizzaMyHeart/sammelband-server" target="_blank" rel="noreferrer">Source</a>
            <ul>
                <li> Node
                    <ul>
                        <li>Express</li>
                        <li>connect-redis for session storage</li>
                        <li>Nodemailer</li>
                    </ul>
                </li>
                <li>Postgres</li>
                <li>Readability by Mozilla</li>
                <li>Puppeteer</li>
            </ul>
            <h4>Front-end</h4>
            <a href="https://github.com/PizzaMyHeart/sammelband-frontend" target="_blank" rel="noreferrer">Source</a>
            <ul>
                <li>React</li>
                <li>sakura.css</li>
                <li>Feather Icons</li>
                <li>Favicon generated using favicon.io</li>
            </ul>
            <h4>Deployment</h4>
            <ul>
                <li>Hetzner</li>
                <li>Nginx</li>
                <li>Vercel</li>
            </ul>
            
            <h3>Sammelwhat?</h3>
            <p><a href="https://en.wikipedia.org/wiki/Sammelband" target="_blank" rel="noreferrer">Sammelband</a>.</p>
            
        </>
    )
}

export default About;