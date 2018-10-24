import React, {Component} from 'react';


export default class BookViewer extends Component {

    render() {
        return (
            <div className="Flex">
                <img src="src/images/orchard-page-new.png" className="ProfileImage DetailStyle Left" alt="Woodstock Country Orchard Home Page"/>
                    <h3>React Book Viewer</h3>
                    <br></br>
                    <h4>Project Discription</h4>
                    <p>
                       For this project my friend gave me a project to build with React.js that would emulate a code interview with the company he works for.
                       He asked me to build a page that grabs data from a RestAPI and display it as a table, 
                       the table had to be sortable by multiple data categories from the page it self.
                    </p>
                    <h4>The Process</h4>
                    <p>
                        Once I started on the project it took me about 3 days to finish using my free time after work. Working on the project helped me feel
                        more like I understood how to create a project using React, since before this point I needed a lot more research and to ask more questions
                        in order to get any sort of result. To build this project I began with making sure I could get react working over on <a href="https://www.codepen.io" target="_blank">Codepen.io </a>
                        then I made sure to gather and store the API data that I needed to work with. Once I had the data I started building a table that could display it.
                        I built the table using CSS Grid but now looking back at it I would have been better to use HTML table tags since it would be handled better by 
                        different device sizes. Next I created the functionality of the page by pushing my data through a sort function before displaying it. Only creating one
                        function for the task was able to handle all the necessary types of data to be sorted. (but I'm sure that using a more precise function would be better for larger datasets)
                        After finalizing all the mechanics of the page I wrote some more CSS to ensure all the data is displayed nicely to the viewer.
                    </p>
                    <a href="https://codepen.io/lekiy/full/QZbyyb/" target="_blank" className="GameButton"><p>Book Viewer App</p></a>
            </div>
        );
    }
}
