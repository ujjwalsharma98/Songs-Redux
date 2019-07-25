import React, { Component } from 'react';
import { connect } from 'react-redux';

class songList extends Component{
    render() {
        return <div>SongsList</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return state;
}

export default connect(mapStateToProps)(songList);