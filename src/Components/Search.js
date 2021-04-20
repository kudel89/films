import React, { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }
    )
  }

  render() {
    const { search, type } = this.state
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='search'
            type='search'
            className='validate'
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn search-btn'
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }>
            Search
          </button>
        </div>
        <label>
          <input
            type='radio'
            name='type'
            value='All'
            data-type='all'
            onChange={this.handleFilter}
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
            onChange={this.handleFilter}
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
            onChange={this.handleFilter}
            checked={type === 'series'}
            className='with-gap'
          />
          <span>Series only</span>
        </label>
      </div>
    )
  }
}

export default Search
