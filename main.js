
import React from 'react'
import ReactDOM from 'react-dom'

var defaultBlogDisplay = "front-end-web";
var currentBlogDisplay = defaultBlogDisplay;

var projectData = {"front-end-web":"webproject1"};
function changeBlogDisplay(displayGroup){
    currentBlogDisplay = displayGroup;
    displayProjects();
    CallReact();
}

function displayProjects(){
    var displayArea = document.getElementById("blog");
    displayArea.innerHTML = "lol";
}

class HelloReact extends HelloReact.Component {
    render(){
        return React.createElement("div", null, "Hello React!");
    }
}

function CallReact(){
    ReactDOM.render(<HelloReact />, document.getElementById('root'));
}