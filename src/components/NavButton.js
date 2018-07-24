import React, {Component} from 'react';

export default class NavButton extends Component {

    render(){
        const props = this.props;

        const buttonTypes = {
            "Facebook":"_facebook fa fa-facebook",
            "Github":"_github fa fa-github",
            "Freecodecamp":"_freecodecamp fa fa-free-code-camp",
            "Linkedin":"_linkedin fa fa-linkedin",
            "Twitter":"_twitter fa fa-twitter",
        };

        let classes = "NavButton "+buttonTypes[props.buttonType];
        if(props.buttonType){
            classes += " _icon";
        }

        return (
            <a href={props.href} className={classes}>
                {props.name}
            </a>
        );
    }
}