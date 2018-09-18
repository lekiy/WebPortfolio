import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import Intro from './components/intro';
import Navbar from './components/Navbar';
import SelectMenu from './components/SelectMenu';
import ContentDisplay from './components/ContentDisplay';
import BlogStore from './blogs/BlogStore';
import ContactMe from './components/ContactMe';


class App extends Component {

  state = {
    selectedPost:"None",
    searchTerm:"Default",
    blogPosts:BlogStore,
    pageRoute:"index",
  }

  handleButtonClick=(title) => {
    this.setState({selectedPost:title}); 
  }

  handleNewSearch=(term) => {
    this.setState(
      {selectedPost:"None",
       searchTerm:term});
  }

  getDisplayedPosts=(searchTerm) => {
    let returnObjectArray = this.state.blogPosts.filter((post) => {
      return post.keywords.includes(searchTerm);
    });

    returnObjectArray = this.limitDisplayedPosts(returnObjectArray, 0, 10);

    if(searchTerm === "Default" || (returnObjectArray === undefined || returnObjectArray.length == 0)){
      ///Getting the first amount of blogs in the list objects///
      returnObjectArray = this.limitDisplayedPosts(this.state.blogPosts, 0, 10);
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

  handleRouteChange=(route) => {
    this.setState({pageRoute:route});
  }

  getFocusedPost(){
    const displayedPosts = this.getDisplayedPosts(this.state.searchTerm);
    const selectedPost = this.state.selectedPost;
    if(this.state.selectedPost === "None"){
    return(
      displayedPosts.map((post) => {
        return (<ContentDisplay post={post} key={post.title} />)
      }));
    }else{
      return(
      <ContentDisplay post={this.state.blogPosts.find((post) => {
        return post.title === selectedPost;
      })}/>);
    }
  }

  getPageContent(){
    
    switch(this.state.pageRoute){
      case "index": 
        const displayedPosts = this.getDisplayedPosts(this.state.searchTerm);
    
        let count = 0;
        return(
          <div className="BlogSection">
            <div className="BlogColumn">
              {this.getFocusedPost()}
            </div>
            <div className="SelectColumn">
              <SelectMenu onClickButton={this.handleButtonClick} posts = {displayedPosts} onChangeString={this.handleNewSearch}/>
            </div>
          </div>
        );
      case "contactMe":
        return(
          <ContactMe />
        );
    }
  }

  render(){ 

    return(
      <div>
        <Navbar onRouteChange={this.handleRouteChange}/>
        {this.getPageContent()}
      </div>
    );
  }
}

/* storing render code here from above
<ContentDisplay post={this.state.blogPosts.find((post) => {
              return post.title === selectedPost;
          })}/>
*/

ReactDOM.render(<App />, document.querySelector('.container'));