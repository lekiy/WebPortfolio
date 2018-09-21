import React, {Component} from 'react';
import NavButton from './NavButton';

export default class Navbar extends Component {
        
    render(){
        return(
            <div>
                <div className="Navbar-spacer"></div>
                <div className="Navbar">
                    <div className="Navbar-Button-Group">
                        <NavButton href="" name="Home" onClick={()=>{this.props.onRouteChange("index")}} />
                        <NavButton href="" name="Contact" onClick={()=>{this.props.onRouteChange("contactMe")}} />
                        <NavButton href="" name="About" onClick={()=>{this.props.onRouteChange("aboutMe")}} />
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