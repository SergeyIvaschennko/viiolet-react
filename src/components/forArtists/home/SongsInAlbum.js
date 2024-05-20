import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./Album.css";
import axios from "axios";
import Soundtrack from "../../home/soundtrack/Soundtrack";

function SongsInAlbum() {
    const [audio, setAudio] = useState([]); // Состояние для хранения данных об художниках
    const { albumName } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/playlist/music/' + albumName);
                setAudio(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

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
                            {audio.length > 0 && (
                                <img src={audio[0].playlist.picUrl} alt="playlist" />
                            )}
                        </div>
                        <div className="container-album-artist">
                            <div className="album-name" id = "head-album-name">{albumName}</div>
                            <div className="head-artist-name">
                                {audio.length > 0 && (
                                    audio[0].playlist.user.username
                                )}
                            </div>
                        </div>
                        <div className="head-down" id="album">
                            {audio.length > 1 ? (
                                "album"
                            ) : (
                                "single"
                            )}
                        </div>
                        <div className="head-down" id = "data">
                            2020
                        </div>
                    </div>
                    <div className="divide-line"></div>
                    {audio.map((track, index) => (
                        <Soundtrack
                            type={"album"}
                            key={index}
                            name={track.name}
                            artist={track.playlist.user.username}
                            picUrl={track.playlist.picUrl}
                            time={track.time}
                            filename={track.filename}
                            isPlaying={currentAudio === index} // Проверяем, является ли текущая аудиозапись этим треком
                            setCurrentAudio={() => setCurrentAudioHandler(index)} // Передаем функцию для установки текущей аудиозаписи
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default SongsInAlbum;