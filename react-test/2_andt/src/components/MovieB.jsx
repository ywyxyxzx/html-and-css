import React, { Component } from 'react'
import MovieList from "./MovieList";
import { withFetch } from "../HOC/WithFetch";
@withFetch('B')
class MovieB extends Component {

  render() {
    return (
      <MovieList movies={this.props.data}></MovieList>
    )
  }
}
export default MovieB;
