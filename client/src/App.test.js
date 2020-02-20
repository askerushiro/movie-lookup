import React from 'react'
import {shallow, mount} from 'enzyme'
import App from './App'

it('renders properly', () => {
    const app = shallow(<App />)
    expect(app.find('.App')).toHaveLength(1)
    expect(app.find('.search')).toHaveLength(1)
    expect(app.find('.result')).toHaveLength(0)
})

it('shows result if one exists', () => {
    const app = mount(<App />)
    app.setState({
        movies: [
            {id: 0, title: 'Robot Film Test', poster_path: 'test_path.jpg', release_date: '2020-02-28', overview: "Just a simple test film."}
        ],
        movieTitle: 'Robot Film Test',
        result: {id: 0, title: 'Robot Film Test', poster_path: 'test_path.jpg', release_date: '2020-02-28', overview: "Just a simple test film."}
    })

    expect(app.find('.result')).toHaveLength(1)
})
