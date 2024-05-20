import "./Main.css";
import IconsButton from "../iconsButton/IconsButton";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import homee from "./img/home.png"
import Neww from "./img/musical-note.png"
import heart from "./img/heart.png"
import Artistss from "./img/group.png"
import Genress from "./img/cd.png"
import NewSongs from "../newsongs/NewSongs";
import Likes from "../likes/Likes";
import Artists from "../artists/Artists";
import Genres from "../genres/Genres";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import React, {useRef, useState} from "react";
import {useSelector} from "react-redux";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import CertainArtist from "../home/сertainArtist/CertainArtist";
import GenrePage from "../home/genrePage/GenrePage";
import SongsInAlbum from "../forArtists/home/SongsInAlbum";


function Main() {
    const showPlayer = useSelector(state => state.player.showPlayer);
    const currentTrack = useSelector(state => state.player.currentTrack);
    return (
        <BrowserRouter>
            <div className="container">
                <div className="menu">
                    <div className="logo">
                        viiolet
                    </div>
                    <IconsButton iconName="Menu" url="/" picUrl={homee}/>
                    <IconsButton iconName="New songs" url="/new-songs" picUrl={Neww}/>
                    <IconsButton iconName="Likes" url="/likes" picUrl={heart}/>
                    <IconsButton iconName="Artists" url="/artists" picUrl={Artistss}/>
                    <IconsButton iconName="Genres" url="/genres" picUrl={Genress}/>
                </div>
                <div className="content">
                    <div className="container-search-one">
                        <div className="profile"></div>
                        <div className="container-search-two">
                            <div className="search-box">
                                <div className="search-icon"></div>
                                <input type="text" className="search-input" placeholder="I don't know why I run away" />
                            </div>
                        </div>
                    </div>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/new-songs" element={<NewSongs />} />
                        <Route path="/likes" element={<Likes />} />
                        <Route path="/artists" element={<Artists />}/>
                        <Route path="/genres" element={<Genres />} />
                        <Route path="/artist/:name" element={<CertainArtist />} />
                        <Route path="/genre/:name" element={<GenrePage />} />
                        <Route path="/songs-in-album/:albumName" element={<SongsInAlbum />} />
                    </Routes>
                    <Footer/>
                </div>
                {showPlayer &&
                    <AudioPlayer name={currentTrack.name} artist={currentTrack.artist} picUrl={currentTrack.picUrl} filename={currentTrack.filename}/>
                }
            </div>

        </BrowserRouter>

    );
}

export default Main;
