import React, {Component} from 'react';


export default class LudumDare42 extends Component {

    render() {
        return (
            <div>
                
                <div>
                <img src="src/images/obelisk-defender-cover.png" className="ProfileImage DetailStyle Left" />
                    <h3>Ludum Dare 42 - Running out of space</h3>
                    <p>
                       This was a project I started for the <a href="http://ldjam.com" target="_blank">Ludum Dare</a> 42nd Game Jam. For those whom might not know
                       a Game Jam is an event where someone makes a Video Game from scratch in a short period of time.
                       (Usually 48 Hours) I used <a href="http://www.yoyogames.com/" target="_blank">GamemakerStudio2</a> for the programming and 
                       <a href="https://inkscape.org/en/" target="blank"> Inkscape</a> for the art.
                    </p>
                    <p>
                        Now having done more than 10 Game Jams I try to set particular goals for what I will be working on in
                        order to improve my abilities and understanding of game design. For this particular jam I wanted to make a 
                        game that had some sort of progression system. I decided on building an isometric action rouge-like game.
                        The progression I was going to add was a simple leveling system with a talent tree that added to the players
                        abilities.
                    </p>
                    <h4 className="Center">Difficulties</h4>
                    <p>
                        This story as most of the time, is not one about success but rather about learning in failure as I did not
                        achieve the goal that I set about above. It came down to a bunch a problems going into the project.
                        The first was that normally I set out a completely open block of time for the Jam, that is uninterrupted by
                        daily living, but this time I was limited on the time I could dedicate to the project. In Addition I've noticed
                         I tend to overscope my projects to be to much work for a single developer.
                        </p>
                        <div className="CaptionContainer Right">
                        <img src="src/images/obelisk.gif" className="CaptionImage" alt="Gif image of some gameplay"/>
                            Some gameplay mechanics
                    </div>
                    <p>
                        Building an isometric view game is a bit more complicated than building a side scroller this makes it more difficult to
                        achieve in a short period of time. The final and largest problem I had was that I choose to make all the art
                        using vector art. Its one of the two art styles I could make I wanted to mix it up from my previous project. However,
                         it was just way too time consuming for me to use, and took way to much time from me to actually program the game.
                    </p>
                    <h4 className="Center">Lessons Learned</h4>
                    <p>
                        After finishing the Jam I didn't feel as though I had a complete enough game to be worth
                        submitting to Ludum Dare. Next time I hope to learn from these mistakes and try to make smaller,
                        but more complete games. Making sure that whenever I design a game, to make what I know
                        first, then add new things to it afterwards, saving the experimenting with completely new ideas and skills
                        to projects that don' t have the same time constraints.
                    </p>
                    <h4 className="Center">Demo</h4>
                    <p>You can play around with the prototype if you want by downloading it from my Itch.io</p>
                    <a href="https://lekiy.itch.io/obelisk-defender" target="_blank" className="GameButton">Play it here</a>
                </div>
            </div>
        );
    }

}
