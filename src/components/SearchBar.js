import React, {Component} from 'react';

export default class SearchBar extends Component {

    state = {
        term: '',
    }

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onChangeString(term);
    }

    render(){
        return (
            <input 
                className="SearchBar DetailStyle" 
                value={this.state.term}
                onChange={this.onInputChange}
            />
        );
    }
}