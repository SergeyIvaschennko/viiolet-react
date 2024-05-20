import "./AudioPlayer.css"
import React, {useEffect, useRef, useState} from "react";
import Slider from "../artists/slider/Slider";
import ControlPanel from "../artists/controls/ControlPanel";
import {useSelector} from "react-redux";
function AudioPlayer(props) {
    const { name } = props;
    const { artist } = props;
    const { picUrl } = props;
    const { filename } = props;
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 0.1

        if (!isPlaying) {
            setIsPlaying(true)
            audio.play()
        }

        if (isPlaying) {
            setIsPlaying(false)
            audio.pause()
        }
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }
    return (
            <div className="player">
                <img src={picUrl} alt=""/>
                <div className="player-text-name">{name}</div>
                <div className="player-text-artist">{artist}</div>
                <div className='audio-player'>
                    <div className='app-container'>
                        <h1>Audio Player</h1>
                        <Slider percentage={percentage} onChange={onChange} />
                        <audio
                            ref={audioRef}
                            onTimeUpdate={getCurrDuration}
                            onLoadedData={(e) => {
                                setDuration(e.currentTarget.duration.toFixed(2))
                            }}
                            src={"http://localhost:8081/audio/"+filename}
                        ></audio>
                        <ControlPanel
                            play={play}
                            isPlaying={isPlaying}
                            duration={duration}
                            currentTime={currentTime}
                        />
                    </div>
                </div>
            </div>
    );
}



export default AudioPlayer;