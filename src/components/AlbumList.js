import React, { Component } from 'react'
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] }

    componentDidMount() {
        // debugger;
        // console.log('component did mount in AlbumList');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }

    // renderAlbums = () => {
    //     if (!this.state.albums) return <Text>Loading...</Text>
    //     return this.state.albums.map(album => {
    //         return (
    //             <Text key={album.title}>{album.title}</Text>
    //         )
    //     })
    // }

    renderAlbums() {
        return this.state.albums.map(album => {
            return (
                <AlbumDetail key={album.title} album={album} />
            )
        });
    }

    render() {

        return (
            <ScrollView>
                {/* <Text>Album List!</Text> */}
                {this.renderAlbums()}

            </ScrollView>
        );
    }
}

export default AlbumList;