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
                       a Game Jam is an event where someone makes a Video Game from scratch in a short peiod of time.
                       (Usualy 48 Hours) I used <a href="http://www.yoyogames.com/" target="_blank">GamemakerStudio2</a> for the progamming and 
                       <a href="https://inkscape.org/en/" target="blank"> Inkscape</a> for the art.
                    </p>
                    <p>
                        Now having done more then 10 Game Jams I try to set particular goals for what I will be working on in
                        order to improve my abilities and understanding of game design. For this particular jam I wanted to make a 
                        game that had some sort of progression system. So I decided on building an isometric action rougelike game.
                        The progression I was going to add was a simple leveling system with a talent tree that added to the players
                        abilities.
                    </p>
                    <p>
                        This story as most of the time, is not one about success but rather about learning in failure as I did not
                        achieve the goal that I set about above. It came down to a bunch a problems going into the project.
                        The first was that normally I set out a completely open block of time for the Jam, that is uninterupted by
                        daily living, but this time I was unable to get the days off from work to do the projects so I lost a large
                        chunk of time do to having to stop in the middle of the project on Saturday and go to work for 8 hours.
                        The second main problem is I tend to overscope my projects considering I was working alone on it. 
                        </p>
                        <div className="CaptionContainer Right">
                        <img src="src/images/obelisk.gif" className="CaptionImage" alt="Gif image of some gameplay"/>
                            Some gameplay mechanics
                    </div>
                    <p>
                        Building an
                        isometric view game is a bit more complicated then building a side scroller so it makes it more difficult to
                        achieve in a short period of time. The final and largest problem I had was that I choose to make all the art
                        using vector art, as its one of the two art styles I could make and I wanted to mix it up from my previous project,
                        but it was just way to time consuming for me to use, and took way to much time from me to actually program the game.
                    </p>
                    <p>
                        So after finishing the Jam I didn't feel as though I had a complete enough game to be worth the time 
                        submitting to Ludum Dare. And next time I hope to learn from these mistakes and try to make smaller,
                        but more complete games in the future. Making sure that whenever I design a game. I make what I know
                        First, then add new things to it afterwards. and save experimenting with completely new ideas and skills
                        to projects that dont have the same time constaints.
                    </p>
                    <p>You can play around with the prototype if you want by downloading it from my Itch.io</p>
                    <a href="https://lekiy.itch.io/obelisk-defender" target="_blank" className="GameButton">Play it here</a>
                </div>
            </div>
        );
    }

}
