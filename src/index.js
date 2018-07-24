import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import Intro from './components/intro';
import Navbar from './components/Navbar';
import SelectMenu from './components/SelectMenu';
import ContentDisplay from './components/ContentDisplay';
import BlogStore from './blogs/BlogStore';


class App extends Component {

  state = {
    selectedPost:"Introduction",
    searchTerm:"Default",
    blogPosts:BlogStore,
  }

  handleButtonClick=(title) => {
    this.setState({selectedPost:title});
  }

  handleNewSearch=(term) => {
    this.setState({searchTerm:term});
  }

  getDisplayedPosts=(searchTerm) => {
    let returnObjectArray = this.state.blogPosts.filter((post) => {
      return post.title.includes(searchTerm);
    });

    returnObjectArray = this.limitDisplayedPosts(returnObjectArray, 0, 5);

    if(searchTerm === "Default" || (returnObjectArray === undefined || returnObjectArray.length == 0)){
      ///Getting the first five blogs in the list objects///
      returnObjectArray = this.limitDisplayedPosts(this.state.blogPosts, 0, 5);
    }

    return returnObjectArray;
  }

  limitDisplayedPosts=(postList, startCount, maxCount) => {
      let count = startCount;
      const returnArray = [];
      postList.map((post) => {
        if(count < maxCount){
          count++;
          returnArray.push(post);
        }
      });

      return returnArray;
  }

  render(){

    const displayedPosts = this.getDisplayedPosts(this.state.searchTerm);

    const selectedPost = this.state.selectedPost;
    const searchTerm = this.state.searchTerm; 

    let count = 0;

    return(
      <div>
        <Navbar />
        <div className="BlogSection">
          <ContentDisplay post={this.state.blogPosts.find((post) => {
              return post.title === selectedPost;
          })}/>
          <SelectMenu onClickButton={this.handleButtonClick} posts = {displayedPosts} onChangeString={this.handleNewSearch}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));