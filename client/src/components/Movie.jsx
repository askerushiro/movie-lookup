import React from 'react'
import '../styles/Movie.scss'

function Movie(props) {
    const {data} = props

    return (
        <div className="movie">
            {/* Sometimes the poster_path doesn't exist */}
            {data.poster_path &&
                (<div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt=""/>
                </div>)
            }
            <div className="data">
                <h2 className="title">{data.title}</h2>
                <ul className="meta">
                    <li>Released: {data.release_date}</li>
                </ul>
                <div className="description">
                    <p>{data.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie