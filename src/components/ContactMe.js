import React, {Component} from 'react';
import Container from './Container';

export default class ContactMe extends Component{
    render(){
        return(
            <Container className="ContactMe">
                <h3>Contact Me</h3>
                <p>
                    Wish to send me a message about something? <br></br>
                    Just fill this out here and I will try my best <br></br>
                     to get back to you as soon as possible <br></br>
                </p>
                <form className="Center" action="https://formspree.io/lekiyminin@gmail.com"
      method="POST">
                    <label>First Name</label>
                    <input type="text" name="firstname" className="InputBox"></input>
                    <label>Last Name</label>
                    <input type="text" name="lastname" className="InputBox"></input>
                    <label>Email</label>
                    <input type="email" name="email" className="InputBox"></input>
                    <label>Subject</label>
                    <input type="text" name="subject" className="InputBox"></input>
                    <label>Content</label>
                    <textarea type="text" name="content" className="InputBox ContentInput" rows="20" cols="50"></textarea>
                    <input type="submit" className="SubmitButton" value="Send Message"></input>
                </form>
            </Container>
        );
    }
}