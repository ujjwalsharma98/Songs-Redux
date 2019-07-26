import React from 'react';
import SongList from './songList';
import SongDetail from './songDetail';

// import {selectSong} from '../actions';
// import Actions from '../actions';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>    
    );
};


export default App;