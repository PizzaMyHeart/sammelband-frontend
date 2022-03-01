import downloadIcon from '../icons/download.svg';
import mailIcon from '../icons/mail.svg';
import attachmentIcon from '../icons/paperclip.svg';
import trashIcon from '../icons/trash-2.svg'

function About() {
    return (
        <>  
            <p>
                Sammelband is a an article-collation service. You feed it a bunch of article URLs 
                (or articles from your <a href="getpocket.com/">Pocket</a> list), 
                and get a single (HTML | PDF | EPUB) file&mdash;the titular virtual <a href="https://en.wikipedia.org/wiki/Sammelband" target="_blank" rel="noreferrer">Sammelband</a>&mdash;in return. The web pages are processed 
                to extract the relevant content, which is then styled for a pleasant reading experience. 
            </p>

            <p>
                Signing up for an account is optional. An account is required to receive Sammelbands in your personal email inbox 
                (to prevent misuse of the email service).
            </p>

            <h3>How</h3>
            <p>1. Supply one or more URLs manually or by connecting to your <a href="getpocket.com/">Pocket</a> account.</p>
            <p>2. Select style and format options for your Sammelband. </p>
            <p>3. To receive the resulting file as an email or an email attachment: </p>
            <p>- Non-logged in users: include a temporary email address from one of the services listed below.</p>
            <p>- Logged in users: Sammelbands will be sent to the email address you signed up with.</p>
            <p>4. Submit!</p>
            <p>5. Now you can perform any of the following actions: </p>
            
            <p><img src={ trashIcon } alt="Trash can icon"/> Delete the Sammelband</p>
        
            <p><img src={ downloadIcon } alt="Download icon"/> Download the Sammelband to your device</p>
        
            <p><img src={ mailIcon } alt="Mail icon"/> Send an email with the Sammelband contents as the email body</p>
    
            <p><img src={ attachmentIcon } alt="Attachment icon"/> Send an email with the Sammelband as a file attachment</p>
           

            <h4 id="supported-temp-emails">Supported temporary emails</h4>
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

                My aim is not to replace any of the above; I'm not trying to reinvent archival or knowledge management. Rather, 
                I see Sammelband as a useful, short-term tool to get some actual reading done. Long trip coming up? 
                Now you can read all those long essays and internet manifestos you've had open in your browser for the last 
                three months. Print it on paper, even, if you're so inclined.
            </p>
         
            
            <h3>ಠ_ಠ</h3>
            <h6>Known limitations</h6>
            <ul>
                <li>Sammelband styling is a work in progress</li>
                <li>Ordering of articles in a Sammelband cannot be changed</li>
            </ul>
            <h6>Found a bug?</h6>
            <p>Please <a href="mailto:admin@sammelband.app">send me an email</a>.</p>
            <h6>Suggestions for improvement?</h6>
            <p>Please also <a href="mailto:admin@sammelband.app">send me an email</a>.</p>
            

            <h3>Technical stuff</h3>
            <h4>Back-end</h4>
            <ul>
                <li> Node
                    <ul>
                        <li>Express</li>
                        <li>connect-redis</li>
                        <li>Nodemailer</li>
                    </ul>
                </li>
                <li>Postgres</li>
                <li>Readability by Mozilla</li>
                <li>Puppeteer</li>
            </ul>
            <h4>Front-end</h4>
            <ul>
                <li>React</li>
                <li>sakura.css</li>
                <li>Feather Icons</li>
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