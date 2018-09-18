import React, {Component} from 'react';


export default class Introduction extends Component {

    render() {
        return (
            <div className="Flex">
                <img src="src/images/orchard-page-new.png" className="ProfileImage DetailStyle Left" alt="Woodstock Country Orchard Home Page"/>
                    <h3>The Orchard Project</h3>
                    <p>
                        This project Is my first web development project that I got to do 
                        in service of another person. I'm even being paid for it which feels 
                        great for my self confididence in my web development abilities.
                    </p>
                    <p>
                        The project was to update a website for a local orchard to display the correct
                        information for the current picking season. My client didn't have a whole lot of
                        specifications on what they wanted me to do other then just correct the current hours,
                        and schedule. So immedietly after I started the project, I made sure to get what they 
                        needed for there business out for display as soon as I could. As I didn't want to cause 
                        any customers confusion or miss anyone coming to the website for information.
                        After that I went ahead and tried to improve the overall design of the website.
                    </p>
                    <div className="CaptionContainer Right">
                        <img src="src/images/orchard-page-old.png" className="CaptionImage" alt="Woodstock Country Orchard Home Page Old"/>
                        This is a screenshot of the homepage before I started working on it. (The top image is afterwards)
                    </div>
                    <p>
                        The previous designer built the flow of the 
                        website using tables, which was making it difficult to read and understand when handling the update, So I ended up just
                        deleting almost the entire page and rebuilt it up from scratch using divs with Id's and managing the flow using CSS Flexbox
                        and CSS Grid. I then added to the design by breaking up each part of the page into its own object defined by a low opacity 
                        white box with a shadow, which made each piece of information pop up and easier to sum up visually. After I got the flow and
                        design of the main webpage completed. I then had to go make it consistent accross all of the pages on the site. Which I was
                        able to do super quickly by using the CSS code and Div structures of the main page, I only had to make occasional adjustments
                        to be able to fit verious other data stuctures such as recipes and photo albums into the main format. 
                    </p>
                    <a href="http://www.woodstockcountryorchard.com/" target="_blank" className="GameButton"><p>Woodstock Country Orchard Website</p></a>
            </div>
        );
    }
}
