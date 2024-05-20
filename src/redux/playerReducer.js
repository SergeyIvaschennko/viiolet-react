const initialState = {
    showPlayer: false,
    currentTrack: {
        name: '',
        artist: '',
        picUrl: '',
        filename: ''
    },
    isPlaying: false
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHOW_PLAYER':
            return {
                ...state,
                showPlayer: action.payload
            };
        case 'SET_CURRENT_TRACK':
            return {
                ...state,
                currentTrack: action.payload
            };
        default:
            return state;
    }
};




export default playerReducer;

