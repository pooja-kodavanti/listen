import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Genres from './components/Genres.jsx';
// import Categories from './components/Categories.jsx';
// import Playback from './components/Playback.jsx';
// import Playlist from './components/Playlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is: false,   
    };
  }

  render() {
    return (
      <div>
        <div className="main">
          <Genres />
          {/* <Playback /> */}
          {/* <div id="createPlaylist">
            <Categories />
            <Playlist />
          </div> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('listen'));
