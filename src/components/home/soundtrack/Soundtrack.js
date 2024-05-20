import React, {useEffect, useState} from 'react';
import "./Soundtrack.css"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTrack, setShowPlayer} from "../../../redux/playerActions";
import {getNameFromToken, getRoleFromToken} from "../../../axios_helper";
function Soundtrack(props) {

    const { name, artist, picUrl, time, filename, isPlaying, setCurrentAudio, fetchData } = props; // Деструктурируем все свойства из props

    const [isPlayingLocal, setIsPlayingLocal] = useState(false);

    const dispatch = useDispatch();

    const username = getNameFromToken();

    useEffect(() => {
        setIsPlayingLocal(isPlaying);
    }, [isPlaying]);

    const toggleBookmarkFetch = () => {
        fetchData()
    };

    const togglePlay = () => {
        setIsPlayingLocal((prevIsPlaying) => !prevIsPlaying);
        setCurrentAudio();
        dispatch(setShowPlayer(true));

        dispatch(setCurrentTrack({ name, artist, picUrl, filename }));
    };

    const [isBookmarked, setIsBookmarked] = useState(false);

    const checkBookmark = async () => {
        try {
            const response = await fetch(`http://localhost:8081/bookmarks/check/${username}/${name}`);
            const data = await response.json();
            setIsBookmarked(data);
        } catch (error) {
            console.error('Error checking bookmark:', error);
        }
    };

    useEffect(() => {
        checkBookmark();
    }, [name, username]);

    const [isAudioBookmarked, setIsAudioBookmarked] = useState(false);

    const toggleBookmark = async () => {
        try {
            if (isBookmarked) {
                await fetch(`http://localhost:8081/bookmarks/${username}/${name}`, { method: 'DELETE' });
                setIsAudioBookmarked(false);
            } else {
                await fetch(`http://localhost:8081/bookmarks/${username}/${name}/${artist}`, { method: 'POST' });
                setIsAudioBookmarked(true);
            }
            checkBookmark();
            toggleBookmarkFetch();
        } catch (error) {
            console.error('Error toggling bookmark:', error);
        }
    };

    const role = getRoleFromToken();

    return (
        // <div className={`audio-container ${isPlaying ? 'playing' : ''}`}> 624
        <div className={`audio-container ${isPlaying ? 'playing' : ''}`} style={{ width: props.type === 'album' ? '950px' : props.type === 'home' ? '100%' : 'auto' }}>
            <div className="audio-square">
                <img src={picUrl} alt="Audio cover" />
                <div className="overlay">
                    <button className="circle" onClick={togglePlay}>
                        {!isPlayingLocal ? (
                            <div className="triangle"></div>
                        ) : (
                            <svg
                                className="pause-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="6" y="4.5" width="4" height="16" fill="#333333" />
                                <rect x="14" y="4.5" width="4" height="16" fill="#333333" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div className="audio-text-name">{name}</div>
            <div className="audio-text-artist">{artist}</div>
            <div className="audio-time-container">
                <div className="audio-text-time">{time}</div>
            </div>
            {role === 'USER' && (
                <div className="heart-container" onClick={toggleBookmark}>
                    <svg
                        className={`heart ${isAudioBookmarked || isBookmarked ? 'bookmarked' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 4.07 12 5.76C13.09 4.07 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                            stroke="#10439F"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default Soundtrack;
