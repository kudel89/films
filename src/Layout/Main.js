import React, { Component } from 'react'
import { MoviesList } from '../Components/MoviesList'
import { Preloader } from '../Components/Preloader'
import Search from '../Components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      )
      .catch((err) => {
        console.error(err)
        this.setState({
          loading: false,
        })
      })
  }

  searchMovies = (str, type = 'all') => {
    this.setState({
      loading: true,
    })
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          loading: false,
        })
      )
      .catch((err) => {
        console.error(err)
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    const { movies, loading } = this.state

    return (
      <div className='container content'>
        <Search searchMovies={this.searchMovies} />

        {loading ? <Preloader /> : <MoviesList movies={movies} />}
      </div>
    )
  }
}

export default Main
