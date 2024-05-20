// playerActions.js
export const setShowPlayer = (value) => {
    return {
        type: 'SET_SHOW_PLAYER',
        payload: value
    };
};

// actions.js
export const setCurrentTrack = (trackData) => {
    return {
        type: 'SET_CURRENT_TRACK',
        payload: trackData
    };
};

// import { useDispatch, useSelector } from 'react-redux';
// import { setIsPlaying } from 'путь/к/playerActions'; // Импортируем setIsPlaying
//
// function AudioPlayer(props) {
//     const isPlaying = useSelector(state => state.player.isPlaying);
//     const dispatch = useDispatch();
//
//     const play = () => {
//         // Остальной ваш код play
//
//         // После изменения статуса воспроизведения вызываем setIsPlaying с противоположным значением
//         dispatch(setIsPlaying(!isPlaying));
//     };
//
// }
