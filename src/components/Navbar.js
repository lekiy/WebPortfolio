import React, {Component} from 'react';
import NavButton from './NavButton';

export default class Navbar extends Component {
        
    render(){
        return(
            <div>
                <div className="Navbar-spacer"></div>
                <div className="Navbar">
                    <div className="Navbar-Button-Group">
                        <NavButton href="http://localhost:8080/" name="Home" />
                        <NavButton href="https://google.com" name="Contact" />
                    </div>
                    <div className="Navbar-Filler">
                    </div>
                    <div className="Navbar-Button-Group">
                        <NavButton href="https://facebook.com/kevin.g.annen" buttonType="Facebook" />
                        <NavButton href="https://twitter.com/lekiyminin" buttonType="Twitter" />
                        <NavButton href="https://www.linkedin.com/in/kevin-annen-6b596583" buttonType="Linkedin" />
                        <NavButton href="https://www.freecodecamp.org/lekiy" buttonType="Freecodecamp" />
                        <NavButton href="https://github.com/lekiy/" buttonType="Github" />
                    </div>
                </div>
            </div>
        );
    }
}