import React, {Component} from 'react';


export default class Introduction extends Component {

    render() {
        return (
            <div>
                <div>
                    <h3>Web Portfolio Project</h3>
                    <p>
                        When first creating this webpage I wanted to try and create a project using React.js, 
                        but at the time I needed to make portfolio for my programming projects as well.
                        To save the time I decided to combine the two.
                    </p>
                    <p>
                        Before starting on this website I used <a href="https://www.Freecodecamp.org" target="_blank">FreeCodeCamp</a> to
                        learn a lot of the basics about web development. It was a great resource to learn lots of Javascript, HTML, and CSS.
                        and gave me a strong foothold which to move forward with.
                        I started learning react using a course from <a href="https://www.udemy.com" target="_blank">Udemy</a>, 
                        Following along up until I felt comfortable creating my own page using it. To keep it simpler for me I
                        went ahead and installed an existing boilerplate using npm and webpack just to get the project going
                        I plan on learning how to setup and customize it for myself later, but it wasn't my priority at the time.
                    </p>
                    <p>
                        Learning React was a bit daunting at first since there are a lot of basic syntax changes coming from Javascript.
                        I managed to figure it out after working on it for a period of time. I tried making the web page to be as modular as 
                        possible as each button or visual block is tied to being its own React component, and each of my posts here are made
                        as a single component and added to a list to allow searching, and filtering via the search bar on the right.
                        Using react to build the website makes it not have to go and reload anytime you click a button or change what is displayed
                        on the page and make the sorting function display my posts instantaneously.
                    </p>
                    <a href="https://github.com/lekiy/WebPortfolio" target="_blank" className="GameButton">Take a peek at the code over on the github repo</a>
                </div>
            </div>
        );
    }

}
