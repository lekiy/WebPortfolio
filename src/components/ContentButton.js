import React, {Component} from 'react';

export default class ContentButton extends Component {
    render(){
        return (
            <input type="button" className="NavButton ContentButton" onClick={this.props.onClick} value={this.props.name}/>
        );
    }
}