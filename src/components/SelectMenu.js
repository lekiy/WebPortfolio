import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ContentButton from './ContentButton';
import Container from './container';


export default class SelectMenu extends Component {
    
    render(){

       return (
           <Container className="SelectMenu">
                <SearchBar onChangeString={this.props.onChangeString} />              
                
                {this.props.posts.map((post) => {
                    return (
                        <ContentButton key={post.title} onClick={() => this.props.onClickButton(post.title)} name={post.title}/>
                    );
                })}
            </Container>
        );
    }
}