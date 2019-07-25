// Action Creater

export const selectSong = song => {
    // Action return
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}
