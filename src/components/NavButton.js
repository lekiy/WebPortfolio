import React, {Component} from 'react';

export default class NavButton extends Component {

    handleClick = (event) => {
        if(this.props.onClick){
            event.preventDefault();
            this.props.onClick();
        }
    }

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
            <a href={props.href} className={classes} onClick={this.handleClick} target="_blank">
                {props.name}
            </a>
        );
    }
}