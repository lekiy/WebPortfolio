import React, {Component} from 'react';
import Container from './container';
import MarkdownRenderer from 'react-markdown-renderer';


export default class ContentDisplay extends Component {
    render(){
        return (
            <Container className="ContentDisplay">
                {this.props.post.content}
            </Container>
        );
    }
}