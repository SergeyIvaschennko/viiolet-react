import React from 'react';
import "./Home.css"
import Inscr from "./inscr/Inscr";
import FiveArtists from "./fiveArtists/FiveArtists";
import {getNameFromToken} from "../../axios_helper";
import AwesomeGenres from "./awesomeGenres/AwesomeGenres";
import Vibe from "./vibe/Vibe";
import FiveSoundtracks from "./fiveSoundtracks/FiveSoundtracks";
function Home(props) {
    const userName = getNameFromToken();
    return (
        <div>
            {/*<div>Welcome, {userName}!</div>*/}
            <Inscr color={"pink"} text={"Check out these artists"} viewMoreUrl="/artists"/>
            <FiveArtists/>
            <Inscr color={"purple"} text={"New songs - new life"} viewMoreUrl="/new-songs"/>
            <FiveSoundtracks/>
            <Inscr color={"yellow"} text={"Awesome genres"} viewMoreUrl="/genres"/>
            <AwesomeGenres/>
            <Inscr color={"green"} text={"What's the vibe"}/>
            <Vibe/>
        </div>
    );
}

export default Home;