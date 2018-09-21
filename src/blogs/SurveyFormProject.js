import React, {Component} from 'react';


export default class Introduction extends Component {

    render() {
        return (
            <div>
                
                <div>
                    
                    <h3>FreeCodeCamp Project - Survey Form</h3>
                    
                    <p>
                    <img src="src/images/league-survey.png" className="ProfileImage DetailStyle Left" alt=""/>
                        Following the programming curriculum on <a href="https://www.freecodecamp.org" target="_blank">FreeCodeCamp</a> I went ahead 
                        and designed a survey form themed around the PC game League of Legends. It gave me more practice using CSS grid and Flexbox
                        The survey doesn't send its data anywhere and is made just from HTML and CSS since it was a simple enough design that I didn't 
                        need to go into javascript to build it.
                    </p>
                    <p>
                        I Themed the survey to have a feel for the data it was asking about. I used lots of 
                        images from the game that correlate to the parts of the game I was asking for data about.
                        All together it creates a nice League of Legends feeling webpage.
                    </p>
                    <div>
                        <a href="https://codepen.io/lekiy/full/djZbow/" target="_blank" className="GameButton"><p>The League of Legends Survey Page</p></a>
                    </div>
                </div>
            </div>
        );
    }

}
