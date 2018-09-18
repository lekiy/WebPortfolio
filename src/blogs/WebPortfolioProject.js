import React, {Component} from 'react';


export default class Introduction extends Component {

    render() {
        return (
            <div>
                <div>
                    <h3>Web Portfolio Project</h3>
                    <p>
                        When first creating this webpage I wanted to try and create a project using react, 
                        but at the time I needed to make portfolio for my programming projects as well.
                        So to save the time I decided to combine the two.
                    </p>
                    <p>
                        I started learning react using a course from <a href="https://www.udemy.com" target="_blank">Udemy</a>, 
                        I followed along up untill I felt comfortable creating my own page using it. To keep it simpler for me I
                        went ahead and installed an existing boilerplate using npm and webpack just so I could get the project going
                        I plan on learning how to setup and customize it for myself later, but it wasn't my priority.
                    </p>
                    <p>
                        Learning React was a bit daunting at first since there are a lot of basic syntax changes comming from Javascript.
                        I managed to figure it out after working on it for a period of time. I tried making the webpage to be as modular as 
                        possible as each button or visual block is tied to being its own React component, and each of my posts here are made
                        as a single component and added to a list to alow searching, and filtering via the search bar on the right.
                        Using react to build the website makes it not have to go and reload anytime you click a button or change what is displayed
                        on the page and make the sorting function display my posts instantainiously.
                    </p>
                </div>
            </div>
        );
    }

}
