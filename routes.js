const {Router} = require('express')
const path = require('path')
const axios = require('axios')

module.exports = (router = new Router()) => {
    router.get('/api/lookup', async (req, res) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${req.query.title}`)
            .then(tmdbRes => {
                res.send(tmdbRes.data.results)
                console.log(`Sent response for query on ${req.query.title}`)
            })
            .catch(err => {
                console.log(err)
            })
    })

    router.get('*', async (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })

    return router
}
