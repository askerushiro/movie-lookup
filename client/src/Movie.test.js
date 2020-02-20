import React from 'react'
import {shallow} from 'enzyme'
import Movie from './components/Movie'

it('renders properly', () => {
    const data = {
        poster_path: '/test.jpg',
        title: 'Test Movie',
        release_date: '2020-02-28',
        overview: 'This is a test overview'
    }
    const movie = shallow(<Movie data={data} />)
    expect(movie.find('.poster')).toHaveLength(1)
    expect(movie.find('.title')).toHaveLength(1)
    expect(movie.find('.meta')).toHaveLength(1)
    expect(movie.find('.description')).toHaveLength(1)
})

it('skips poster if one doesn\'t exist', () => {
    const data = {
        poster_path: null,
        title: 'Test Movie',
        release_date: '2020-02-28',
        overview: 'This is a test overview'
    }
    const movie = shallow(<Movie data={data} />)
    expect(movie.find('.poster')).toHaveLength(0)
})