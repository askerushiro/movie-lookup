const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

// Endpoint for pinging TheMovieDB
app.get('/api/lookup', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${req.query.title}`)
        .then(tmdbRes => {
            res.send(tmdbRes.data.results)
            console.log(`Sent response for query on ${req.query.title}`)
        })
        .catch(err => {
            res.send({error: tmdbRes.data.status_message})
            console.log(err)
        })
})

// Catch-all for anything else
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Movie lookup api listening on ${port}`)