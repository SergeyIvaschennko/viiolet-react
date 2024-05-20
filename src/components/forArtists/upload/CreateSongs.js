import {useLocation, useNavigate, useParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {getNameFromToken} from "../../../axios_helper";
import "./Input.css";
import "./Upload.css";
import "./Buttons.css";


function CreateSongs() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const albumName = searchParams.get('albumName');
    const albumPhoto = searchParams.get('albumPhoto');
    const navigate = useNavigate();
    const [audio, setAudio] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const albumName = params.get('albumName');
        fetchAudioData(albumName);
    }, [location.search]);

    const fetchAudioData = () => {
        fetch('http://localhost:8081/audio/album/' + albumName)
            .then(response => response.json())
            .then(data => setAudio(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleUploadSongClick = (albumName) => {
        navigate(`/upload-song?albumName=${albumName}`);
    };

    const handleCancel = async () => {
        try {
            await fetch('http://localhost:8081/playlist/'+albumName, {
                method: 'DELETE'
            });
            navigate('/');
        } catch (error) {
            console.error('Error cancelling:', error);
        }
    };

    const handleAdd = () => {
        // Перемещение на главную страницу
        navigate('/');
    };



    return (
            <div>
                <div className="container-content">
                    <div className="container-for-upload-music">
                        <div className="album-pic" >
                            <img src={albumPhoto} alt="artist"/>
                        </div>
                        <div className="album-name">'{albumName}'</div>
                        <div className="divide-line"></div>


                            <div className="form-container" id="forbuttons">
                                <button className="submit-button" id="color-black" onClick={() => handleUploadSongClick(albumName)}>
                                    + add the song
                                </button>
                            </div>



                        {audio.map((track, index) => (
                            <div key={index} className="new-audio-container">
                                <div className="audio-square">
                                    <img src={albumPhoto} alt="Audio cover" />
                                </div>
                                <div className="audio-text-name">{track[0]}</div>
                                <div className="audio-text-artist">{getNameFromToken()}</div>
                                <div className="audio-text-time">{track[1]}</div>
                            </div>
                        ))}

                        <div className="form-container" id="forbuttons">
                            <button className="submit-button" id="cancel-button" onClick={handleCancel}>
                                cancel
                            </button>
                            <button className="submit-button" id="add" onClick={handleAdd}>
                                post the album
                            </button>
                        </div>



                    </div>
                </div>
            </div>
    );
}

export default CreateSongs;

