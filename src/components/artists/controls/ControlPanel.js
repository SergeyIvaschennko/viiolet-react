import React from 'react'
import './control-panel.css'
import Button from "./Button";

function ControlPanel({ play, isPlaying, duration, currentTime }) {
    function secondsToHms(seconds) {
        if (!seconds) return '00:00';

        let duration = seconds;
        let hours = Math.floor(duration / 3600);
        duration = duration % 3600;

        let min = Math.floor(duration / 60);
        duration = duration % 60;

        let sec = Math.floor(duration);

        if (sec < 10) {
            sec = `0${sec}`;
        }
        if (min < 10) {
            min = `0${min}`;
        }

        if (hours > 0) {
            return `${hours}:${min}:${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    }


    return (
        <div className='control-panel'>
            <div className='timer'>{secondsToHms(currentTime)}</div>
            <Button play={play} isPlaying={isPlaying} />
            <div className='timer'>{secondsToHms(duration)}</div>
        </div>
    )
}
export default ControlPanel