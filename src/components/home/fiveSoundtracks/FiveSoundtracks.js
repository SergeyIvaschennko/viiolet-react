import React, {useEffect, useState} from 'react';
import "./FiveSoundtracks.css"
import Soundtrack from "../soundtrack/Soundtrack";
function FiveSoundtracks() {

    const [audio, setAudio] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/latest')
            .then(response => response.json())
            .then(data => setAudio(data))
            .catch(error => console.error('Error fetching data:', error));
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
        <div className="container-content">
            <div className="container-fixed-length-for-music" style={{ width: '1142px' }}>
            {audio.map((track, index) => (
                    <Soundtrack
                        type={"home"}
                        key={index}
                        name={track[0]}
                        artist={track[2]}
                        picUrl={track[3]}
                        time={track[4]}
                        filename={track[1]}
                        isPlaying={currentAudio === index} // Проверяем, является ли текущая аудиозапись этим треком
                        setCurrentAudio={() => setCurrentAudioHandler(index)} // Передаем функцию для установки текущей аудиозаписи
                    />
                ))}
            </div>
        </div>
    );
}

export default FiveSoundtracks;
