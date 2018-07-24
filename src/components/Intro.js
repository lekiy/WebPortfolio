import React, {Component} from 'react';
import Container from './container';

export default class Intro extends Component {

    render(){
        return (
            <Container>
                <img src="../src/images/kevin-profile.jpg" className="ProfileImage DetailStyle" />
                <i className="DetailStyle IntroText" > Excelsior! My name is Kevin Annen, and this website is a hub for all of my Programming, Design and Other Projects.</i>
            </Container>
        );
    }
}