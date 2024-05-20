import React, {useState} from "react";
import {getNameFromToken} from "../../../axios_helper";
import axios from "axios";
import "./Upload.css";
import { useNavigate } from 'react-router-dom';
import "./Input.css";
import "./Buttons.css";



function CreateAlbum() {
    const [name, setName] = useState('');
    const [picUrl, setPicUrl] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Получение имени пользователя из токена
        const userName = getNameFromToken();

        console.log('Submitting form...');

        if (!name || !picUrl) {
            // Добавляем класс для стилизации ошибки к полям ввода
            document.getElementById('name-input').classList.add('error-input');
            document.getElementById('picUrl-input').classList.add('error-input');

            return; // Предотвращаем отправку формы
        }

        try {
            const response = await axios.post('http://localhost:8081/playlists', {
                name: name,
                picUrl: picUrl,
                username: userName
            });

            console.log('Meta created:', response.data);
            // setRedirect(true);
            navigate(`/create-songs?albumName=${name}&albumPhoto=${picUrl}`);
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };


    return (
        <div>
            <div className="container-content">
                <div className="container-for-upload-album">
                    <div className="upload-header">Create the album</div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input
                                id="name-input"
                                type="text"
                                className="input"
                                value={name}
                                placeholder="Name of you stunning album"
                                onChange={(e) => setName(e.target.value)}
                            />                        </label>
                        <label>
                            <input
                                id="picUrl-input"
                                type="text"
                                className="input"
                                value={picUrl}
                                placeholder="Url of your album covers"
                                onChange={(e) => setPicUrl(e.target.value)}
                            />                        </label>
                        <button type="submit" className="submit-button" id="color-black">Let's rock</button>
                    </form>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default CreateAlbum;