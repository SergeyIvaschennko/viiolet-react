import {useParams} from "react-router-dom";
import SongsInAlbum from "../../forArtists/home/SongsInAlbum";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Soundtrack from "../soundtrack/Soundtrack";

function GenrePage(props) {
    const genres = [
        { name: "Pop music", emoji: "🎤", color: "#4BE3AC" },
        { name: "Rock", emoji: "🎸", color: "#FFD23F" },
        { name: "Hip-hop", emoji: "💸", color: "#002379" },
        { name: "Electronic music", emoji: "🎹", color: "#7469B6" },
        { name: "Punk", emoji: "🤟️", color: "#000000" },
        { name: "Classical", emoji: "🎻", color: "#F8F4E1" },
        { name: "Indie", emoji: "💫", color: "#40A578" },
        { name: "Alternative", emoji: "🤪", color: "#FC4100" },
        { name: "Dance music", emoji: "💃", color: "#141E46" },
        { name: "R&B", emoji: "🎶", color: "#3B3486" },
        { name: "Jazz", emoji: "🎷", color: "#F5F7F8" },
        { name: "Folk", emoji: "🌾", color: "#D2649A" },
        { name: "Avant-garde & Experimental", emoji: "🛸", color: "#76ABAE" },
        { name: "Country", emoji: "🤠", color: "#C3FF93" }
    ];

    const { name } = useParams();

    const [audio, setAudio] = useState([]); // Состояние для хранения данных об художниках
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/audio/genre/' + name);
                setAudio(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/genre/' + name);
                setGenre(response.data);
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

    const matchingGenre = genres.find(genre => genre.name === name);

// Если найдено совпадение, используйте эмодзи и цвет для отображения
    const emoji = matchingGenre ? matchingGenre.emoji : null;
    const color = matchingGenre ? matchingGenre.color : null;

    return (
        <div>
            <div className="container-content">
                <div className="container-for-upload-music">
                    <div className="album-head">
                        {/*<div className="album-pic" id = "head-pic">*/}

                        {/*</div>*/}
                        <div className="album-pic" id="head-pic" style={{ backgroundColor: color }}>
                            {emoji && <span role="img" aria-label="genre-emoji">{emoji}</span>}
                        </div>
                        <div className="container-album-artist">
                            <div className="album-name" id = "head-album-name">{name}</div>
                                <div className="head-artist-name">
                                    viiolet
                                </div>
                        </div>
                        <div className="head-down" id="album">
                            Updated today
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

export default GenrePage;