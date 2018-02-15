import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSerach from 'youtube-api-search';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyC-grxu9HHmjLWotZ-CJBHATCeZfMwvWg4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSerach({key: API_KEY, term: 'surfboards'}, videos => this.setState({ videos }));
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));