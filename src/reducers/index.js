import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'Mehbooba', duration: '5:10'},
        {title: 'Awara', duration: '4:40'},
        {title: 'Sheela', duration: '3:10'},
        {title: 'Panga', duration: '6:40'},
        {title: 'Munni', duration: '5:00'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
});





