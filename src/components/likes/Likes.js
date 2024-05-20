import React, {useEffect, useState} from 'react';
import "./Likes.css"
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {getNameFromToken} from "../../axios_helper";
import Soundtrack from "../home/soundtrack/Soundtrack";
function Likes() {
    const [audio, setAudio] = useState([]); // Состояние для хранения данных об художниках
    const { albumName } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/bookmarks/' + getNameFromToken());
            setAudio(response.data);
        } catch (error) {
            console.error('Error fetching albums:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [currentAudio, setCurrentAudio] = useState(null); // Стейт для отслеживания текущей аудиозаписи
    const setCurrentAudioHandler = (audioId) => {
        if (currentAudio === audioId) {
            setCurrentAudio(null); // Если текущая аудиозапись уже выбрана, отключаем ее
        } else {
            setCurrentAudio(audioId); // Устанавливаем новую текущую аудиозапись
        }
    };
    return (
        <div>
            <div className="container-content">
                <div className="container-for-upload-music">
                    <div className="album-head">
                        <div className="album-pic" id = "head-pic">
                            {/*<img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/thumbs/gas-kvas-com-p-serdechko-zheltoe-na-prozrachnom-fone-39.png" alt="playlist" />*/}
                            💗
                        </div>
                        <div className="container-album-artist">
                            <div className="album-name" id = "head-album-name">Your favorite songs</div>
                            <div className="head-artist-name">
                                {getNameFromToken()}
                            </div>
                        </div>

                    </div>
                    <div className="divide-line"></div>
                    <div className="container-fixed-length-for-music" style={{ width: '950px', marginTop: '0' }}>
                        {audio.length > 0 ? (
                            audio.map((track, index) => (
                                <Soundtrack
                                    type={"album"}
                                    key={index}
                                    name={track.name}
                                    artist={track.playlist.user.username}
                                    picUrl={track.playlist.picUrl}
                                    time={track.time}
                                    filename={track.filename}
                                    isPlaying={currentAudio === index}
                                    setCurrentAudio={() => setCurrentAudioHandler(index)}
                                    fetchData={fetchData}
                                />
                            ))
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <br/>
                                <div className="album-name" id = "head-album-name">Let's gonna find something fot u :)</div>
                                <br/>
                                <Link to="/new-songs">
                                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '15px' }}>new songs</div>
                                </Link>
                                <br/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Likes;