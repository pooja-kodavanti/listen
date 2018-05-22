import React from 'react';
import axios from 'axios';
import {Button, Icon} from 'react-materialize';

export default class Genres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: [],
      isLoaded: false,
    };

    this.getGenres = this.getGenres.bind(this);
  }
  componentDidMount() {
    this.getGenres();
  }
  getGenres() {
    const context = this;
    axios.get('http://localhost:3000/genres')
      .then(data => context.setState({
        genres: data.data,
        isLoaded: true,
        currGenres: ['afro'],
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { isLoaded, genres, currGenres } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    if (isLoaded) {
      return (
        <div>
          <div className="genreRow">
          Mod
            <div>Current Genres: </div>
            <div className="chosenGenres">
              {currGenres.map((pick) => {
                return <span className="chosenGenre">{pick}</span>;
              })}
            </div>
          </div>
          <div className="genres">
            {genres.map((genre) => {
              return <button className="genre">{genre}</button>;
            })}
          </div>
        </div>
      );
    }
  }
}
