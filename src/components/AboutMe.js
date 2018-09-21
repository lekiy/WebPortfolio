import React, {Component} from 'react';
import Container from './Container';

export default class AboutMe extends Component{
    render(){
        return(
            <Container className="AboutMe">
                <h3>About Me</h3>
                <p>
                    Looking for some more details about me? <br></br>
                    Here is a list of some of the skills I have:
                </p>
                <div className="Columns2">
                    <ul>
                        <li>React.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Graphic Design</li>
                    </ul>
                    <ul>
                        <li>Object Oriented Programming</li>
                        <li>Leadership</li>
                        <li>Software Design</li>
                        <li>Game Design</li>
                        <li>Electronics/Computer Repair</li>
                    </ul>
                </div>
                <a href="https://www.dropbox.com/s/zqw1acvwfxi9xol/Kevin%20Annen%27s%20Resume.pdf?dl=0" target="_blank" className="GameButton">You can also download my resumé from Here</a>
            </Container>
        );
    }
}