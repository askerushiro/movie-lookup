import React from 'react'
import Autocomplete from 'react-autocomplete'
import './styles/App.scss'
import Movie from './components/Movie'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      movieTitle: '',
      result: {}
    }

    this.getMovies = this.getMovies.bind(this)
  }

  getMovies = title => {
    this.setState({
      movieTitle: title,
      movies: []
    })
    // Make sure we only query when there's an actual title
    title.length &&
      fetch(`/api/lookup?title=${title}`)
        .then(res => res.json())
        .then(results => this.setState({movies: results}))
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Lookup</h1>
        <div className="search">
          <Autocomplete
            getItemValue={item => item.title}
            items={this.state.movies}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.title}
              </div>
            }
            value={this.state.movieTitle}
            onChange={e => this.getMovies(e.target.value)}
            onSelect={(title, movieItem) => {
              this.setState({
                movieTitle: title,
                result: movieItem
              })
            }}
          />
        </div>
        {/* Only show movie if there's an object populating result */}
        {this.state.result.title &&
          (<div className="result">
            <Movie data={this.state.result} />
          </div>)
        }
      </div>
    )
  }
}

export default App
