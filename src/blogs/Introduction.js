import React, {Component} from 'react';


export default class Introduction extends Component {

    render() {
        return (
            <div>
                
                <img src="src/images/kevin-profile.jpg" className="ProfileImage DetailStyle Left" />
                <h3>Excelsior!</h3>
                <p>
                    My name is Kevin Annen and this website
                    is a hub for my programming, design, and
                    commentary about games I like to play.
                </p>
                <p>
                    I grew up in the greater Chicago suburbs.
                    I started programming back in 2010 working on mods for minecraft, and have been programming as a hobby since.
                    Some of my interests include: Game Development, Animal Resque, Martial Arts, Lego, and Tabletop Games.
                </p>
                <p>
                    At this time this website is still under construction, and is entirely constructed in React from scratch
                    so please disregard any bugs or missing content. 
                </p>
            </div>
        );
    }
}
