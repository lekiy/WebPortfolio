import React, {Component} from 'react';

export default class Container extends Component{
    render(){

        const styles = "BlockStyle "+this.props.className;

        return(
            <div className={styles}>{this.props.children}</div>     
        );
    }
}