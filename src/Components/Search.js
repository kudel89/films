import React, { useState } from 'react'

const Search = (props) => {
  const { searchMovies = Function.prototype } = props
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type)
    }
  }

  const handleFilter = (e) => {
    setType(e.target.dataset.type)
    searchMovies(search, e.target.dataset.type)
  }

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          placeholder='search'
          type='search'
          className='validate'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className='btn search-btn'
          onClick={() => searchMovies(search, type)}>
          Search
        </button>
      </div>
      <label>
        <input
          type='radio'
          name='type'
          value='All'
          data-type='all'
          onChange={handleFilter}
          checked={type === 'all'}
          className='with-gap'
        />
        <span>All</span>
      </label>
      <label>
        <input
          type='radio'
          name='type'
          value='Movies only'
          data-type='movie'
          onChange={handleFilter}
          checked={type === 'movie'}
          className='with-gap'
        />
        <span>Movies only</span>
      </label>
      <label>
        <input
          type='radio'
          name='type'
          value='Series only'
          data-type='series'
          onChange={handleFilter}
          checked={type === 'series'}
          className='with-gap'
        />
        <span>Series only</span>
      </label>
    </div>
  )
}

export default Search
