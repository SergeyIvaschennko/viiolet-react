import "../main/Main.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {useRef, useState} from "react";
import IconsButton from "../iconsButton/IconsButton";
import homee from "../main/img/home.png"
import avatar from "../main/img/avatar.png"
import cloud from "../main/img/cloud.png"
import Footer from "../footer/Footer";
import Profile from "../forArtists/profile/Profile";
import Home from "./home/Home";
import CreateAlbum from "./upload/CreateAlbum";
import CreateSongs from "./upload/CreateSongs";
import UploadSong from "./upload/UploadSong";
import SongsInAlbum from "./home/SongsInAlbum";
import UploadMeta from "./upload/UploadMeta";
import {useSelector} from "react-redux";
import AudioPlayer from "../audioPlayer/AudioPlayer";

function AuthContent() {
    const showPlayer = useSelector(state => state.player.showPlayer);
    const currentTrack = useSelector(state => state.player.currentTrack);
    return (
        <BrowserRouter>
            <div className="container">
                <div className="menu">
                    <div className="logo">
                        viiolet
                    </div>
                    <IconsButton iconName="Home" url="/" picUrl={homee}/>
                    <IconsButton iconName="Create album" url="/upload" picUrl={cloud}/>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/upload" element={<CreateAlbum />} />
                        <Route path="/create-songs" element={<CreateSongs />}/>
                        <Route path="/upload-song" element={<UploadSong />} />
                        <Route path="/songs-in-album/:albumName" element={<SongsInAlbum />} />
                        <Route path="/add-meta" element={<UploadMeta />} />
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

export default AuthContent;
