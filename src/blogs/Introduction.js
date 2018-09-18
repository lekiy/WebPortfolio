import React, {Component} from 'react';


export default class Introduction extends Component {

    render() {
        return (
            <div>
                
                <img src="src/images/kevin-profile.jpg" className="ProfileImage DetailStyle Left" />
                <h3>Excelsior!</h3>
                <p>
                    My name is Kevin Anneb and this website
                    is a hub for my programming, design, and
                    commentary about games I like to play.
                </p>
                <p>
                    I grew up in Lake In The Hills and now live in Woodstock.
                    I started programming back in 2010 working on mods for minecraft, and have been occasonally dabbling in programming ever since.
                    Some of my interests include: Game Development, Animal Resque, Martial Arts, Lego, and Tabletop Games.
                </p>
                <p>
                    At this time this website is still under construction, so please disreguard any bugs or missing content. 
                </p>
            </div>
        );
    }
}
