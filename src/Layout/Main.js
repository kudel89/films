import React, { useState, useEffect } from 'react'
import { MoviesList } from '../Components/MoviesList'
import { Preloader } from '../Components/Preloader'
import Search from '../Components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const searchMovies = (str, type = 'all') => {
    setLoading(true)
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }

  return (
    <div className='container content'>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <MoviesList movies={movies} />}
    </div>
  )
}

export default Main
