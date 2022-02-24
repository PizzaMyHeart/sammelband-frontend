function About() {
    return (
        <>  
            <p>
                Sammelband is a an article-collation service. You feed it a bunch of article URLs 
                (or articles from your <a href="getpocket.com/">Pocket</a> list), 
                and get a single (HTML | PDF | EPUB) file in return. The web pages are processed 
                to extract the relevant content, which is then styled for a pleasant reading experience. 
            </p>

            <h3>How</h3>
            <p>1. Supply one or more URLs manually or by connecting to your <a href="getpocket.com/">Pocket</a> account.</p>
            <p>2. Select style and format options for your Sammelband. </p>
            <p>3. Optionally include your email if you want to receive the resulting file as an email or an email attachment.</p>
            <p>4. Submit!</p>
            
            <h3>Why?</h3>
            <p>
                There are many heavy hitters in the bookmarking/read-it-later space, such as Pocket,
                Instapaper, Pinboard, and <a href="https://hn.algolia.com/?dateRange=all&page=0&prefix=true&query=show%20hn%20bookmark&sort=byPopularity&type=story">
                    many more
                </a>.

                My aim is not to replace any of the aforementioned apps; I'm not trying to reinvent archival or knowledge management. Rather, 
                I see Sammelband as a useful, short-term tool to get some actual reading done. Long trip coming up? 
                Now you can read all those long essays and internet manifestos you've had open in your browser for the last 
                three months. Print it on paper, even, if you're so inclined.
            </p>
         
            

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
            <p><a href="https://en.wikipedia.org/wiki/Sammelband" target="_blank" rel="noreferrer">Sammelband</a></p>
        </>
    )
}

export default About;