import React, {useState, useEffect, useRef} from "react";
import {getNameFromToken} from "../../../axios_helper";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import "./Input.css";
import "./Upload.css";


function UploadSong() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const playlist_name = searchParams.get('albumName');
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [vibe, setVibe] = useState('');
    const [genre, setGenre] = useState('');
    const [time, setTime] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const artist_name = getNameFromToken();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("vibe", vibe);
        formData.append("genre", genre);
        formData.append("time", time);
        formData.append("artist_name", artist_name);
        formData.append("playlist_name", playlist_name);
        try {
            const response = await axios.post('http://localhost:8081/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            window.history.back();
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };



    const inputRef = useRef(null);

    useEffect(() => {
        // Устанавливаем курсор в начало при монтировании компонента
        inputRef.current.setSelectionRange(0, 0);
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        const newValue = value
            .replace(/[^\d]/g, "") // Удаляем все символы, кроме цифр
            .substring(0, 3) // Обрезаем строку до 4 символов
            .replace(/(\d{1})(\d{0,2})/, "$1:$2") // Добавляем двоеточие после второй цифры
            .replace(/#/g, (match, offset) => (offset < newValue.length ? newValue.charAt(offset) : match)); // Заменяем символы # на соответствующие цифры

        setTime(newValue);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Backspace" || event.key === "Delete") {
            const cursorPosition = inputRef.current.selectionStart;
            const value = time.split("");

            if (event.key === "Backspace" && cursorPosition > 0) {
                value.splice(cursorPosition - 1, 1);
                setTime(value.join(""));
                inputRef.current.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
            } else if (event.key === "Delete" && cursorPosition < value.length) {
                value.splice(cursorPosition, 1);
                setTime(value.join(""));
                inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
            }

            event.preventDefault();
        }
    };


    return (
        <div>
            <div className="container-content">
                <div className="container-for-upload-album">
                    <div className="upload-header">Upload the song</div>
                    <form onSubmit={handleSubmit}>
                        <label className="custom-file-input">
                            Upload your audio file:
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="file-input"
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                className="input"
                                value={name}
                                placeholder="Name of you stunning song"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <div className="form-container" id="forinputs">
                            <div className="inscription-for-form">Add the time</div>
                            <label>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="input"
                                    value={time}
                                    placeholder="3:15"
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                    id="time"
                                />
                            </label>
                        </div>

                        <div className="form-container" id="forinputs">
                            <div className="inscription-for-form">What's the vibe of this song</div>
                            <label>
                                <select className="input" id = "select" onChange={(e) => setVibe(e.target.value)}>
                                    <option value="Chill">Chill</option>
                                    <option value="Energetic">Energetic</option>
                                    <option value="Happy">Happy</option>
                                    <option value="Sad">Sad</option>
                                    <option value="Romantic">Romantic</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-container" id="forinputs">
                            <div className="inscription-for-form">What's the genre of this song</div>
                            <select className="input" id="select" onChange={(e) => setGenre(e.target.value)}>
                                <option value="Pop music">Pop music</option>
                                <option value="Rock">Rock</option>
                                <option value="Hip Hop">Hip Hop</option>
                                <option value="Electronic music">Electronic music</option>
                                <option value="Punk">Punk</option>
                                <option value="Classical">Classical</option>
                                <option value="Indie">Indie</option>
                                <option value="Alternative">Alternative</option>
                                <option value="Dance music">Dance music</option>
                                <option value="R&B">R&B</option>
                                <option value="Jazz">Jazz</option>
                                <option value="Folk">Folk</option>
                                <option value="Avant-garde & Experimental">Avant-garde & Experimental</option>
                                <option value="Country">Country</option>
                            </select>

                        </div>
                        <button type="submit" className="submit-button" id="color-black">
                            Let's rock
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UploadSong;