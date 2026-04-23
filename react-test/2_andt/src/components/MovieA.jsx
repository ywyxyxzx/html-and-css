import React, { Component } from 'react'
import MovieList from './MovieList'
import { withFetch } from "../HOC/WithFetch";
@withFetch('A')
class MovieA extends Component {

  render() {
    return (
      <MovieList movies={this.props.data}></MovieList>
    )
  }
}
export default MovieA
